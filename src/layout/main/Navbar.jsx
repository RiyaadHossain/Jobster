import React, { useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { signOutReducer } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const { pathname } = useLocation();
  const {
    user: { email, role },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        navbarRef.current.classList.add("bg-white");
        navbarRef.current.classList.add("shadow-md");
        navbarRef.current.classList.add("transition-colors");
      } else {
        navbarRef.current.classList.remove("bg-white");
        navbarRef.current.classList.remove("shadow-md");
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

  return (
    <nav
      ref={navbarRef}
      className={`h-20 fixed w-full z-[999] ${pathname === "/" ? null : ""}`}
    >
      <ul className="max-w-7xl mx-auto flex gap-3 px-6 h-full items-center">
        <li className="flex-auto font-semibold text-2xl">
          <Link to="/">Elite Recruiting</Link>
        </li>
        <li>
          <Link className="hover:text-primary" to="/jobs">
            Jobs
          </Link>
        </li>

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
    </nav>
  );
};

export default Navbar;
