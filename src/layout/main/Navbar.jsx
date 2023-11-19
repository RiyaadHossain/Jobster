import React, { useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { signOutReducer } from "../../features/auth/authSlice";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { toast } from "react-hot-toast";
import Sidebar from "./Sidebar";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const { pathname } = useLocation();
  const {
    user: { email, role },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 120) {
        navbarRef.current.classList.add("nav-white");
      } else {
        navbarRef.current.classList.remove("nav-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    signOut(auth);
    toast.success("Sign Out successfully", { id: "signout" });
    dispatch(signOutReducer());
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-y-hidden");
  };

  return (
    <nav className={``}>
      <div
        ref={navbarRef}
        className={`h-20 fixed w-full z-20 ${pathname === "/" ? null : ""} `}
      >
        <ul className="max-w-7xl mx-auto flex gap-3 px-6 h-full items-center">
          <li className="flex-auto font-bold text-2xl">
            <div className="flex items-center gap-6">
              <Link to="/">
                <span className="text-blue-600">J</span>obster
              </Link>
              <div className="cursor-pointer" onClick={toggleMenu}>
                <HiOutlineMenuAlt1 />
              </div>
            </div>
          </li>
          {/* <li>
            <Link className="hover:text-primary" to="/jobs">
              Jobs
            </Link>
          </li> */}

          {email ? (
            <li>
              <button
                onClick={handleLogOut}
                className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                to="/login"
              >
                Login
              </Link>
            </li>
          )}
          {email &&
            (email && role ? (
              <li>
                <Link
                  className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                  to={`/dashboard/${email}/${role}`}
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                  to="/register"
                >
                  Register
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Sidebar Menu */}
      <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <div
        className={`w-screen h-screen bg-black opacity-50 ${
          menuOpen ? "block" : "hidden"
        } fixed z-20`}
      ></div>
    </nav>
  );
};

export default Navbar;
