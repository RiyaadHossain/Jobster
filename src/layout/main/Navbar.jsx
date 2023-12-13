import React, { useEffect, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { signOutReducer } from "../../features/auth/authSlice";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { toast } from "react-hot-toast";
import Sidebar from "./Sidebar";
import { navbarItems } from "../../constants/navbarItems";
import ProfileMenu from "./ProfileMenu";
import SignUpModal from "../../modals/SignUpModal";
import SignInModal from "../../modals/SignInModal";
import ForgetPassModal from "../../modals/ForgetPassModal";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const { pathname } = useLocation();
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openForgetPassModal, setOpenForgetPassModal] = useState(false);

  const {
    user: { email },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    // Show Navbar background when scroll down
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        navbarRef.current.classList.add("nav-white");
      } else {
        navbarRef.current.classList.remove("nav-white");
      }
    };

    // Listen for scroll down
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener on component unmount
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

  const toggleSignUpModal = () => {
    setOpenSignUpModal(!openSignUpModal);
    document.body.classList.toggle("overflow-y-hidden");
  };

  const toggleSignInModal = () => {
    setOpenSignInModal(!openSignInModal);
    document.body.classList.toggle("overflow-y-hidden");
  };

  const toggleForgetPassModal = () => {
    setOpenForgetPassModal(!openSignUpModal);
    document.body.classList.toggle("overflow-y-hidden");
  };

  const isHomeRoute = pathname === "/";
  const mediumDevice = window.innerWidth <= 1020;

  return (
    <nav>
      <div
        ref={navbarRef}
        className={`h-20 fixed top-0 w-full z-20 ${
          pathname === "/" ? null : ""
        } `}
      >
        <ul className="max_container mx-auto justify-between flex gap-3 h-full items-center">
          <li className=" font-bold text-2xl">
            <div className="flex items-center gap-6">
              <Link to="/">
                <span className="text-blue-600">J</span>obster
              </Link>
              {(isHomeRoute || mediumDevice) && (
                <div className="cursor-pointer" onClick={toggleMenu}>
                  <HiOutlineMenuAlt1 />
                </div>
              )}
            </div>
          </li>

          {!isHomeRoute && (
            <li className="hidden lg:block">
              <ul className="flex items-center gap-10 font-semibold">
                {navbarItems.map((item) => (
                  <li key={item.display}>
                    <Link className="hover:text-primary" to={item.link}>
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )}

          <div className="flex items-center gap-8">
            {email ? (
              <li>
                <ProfileMenu
                  props={{
                    handleLogOut,
                  }}
                />
              </li>
            ) : (
              <li>
                <button
                  onClick={toggleSignInModal}
                  className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all"
                >
                  SignIn
                </button>
              </li>
            )}
          </div>
        </ul>
      </div>

      {/* Sidebar Menu */}
      <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <div
        onClick={toggleMenu}
        className={`w-screen h-screen bg-black opacity-70 ${
          menuOpen ? "block" : "hidden"
        } fixed z-20 top-0`}
      ></div>

      <SignInModal
        openSignInModal={openSignInModal}
        toggleSignInModal={toggleSignInModal}
      />
      <SignUpModal
        openSignUpModal={openSignUpModal}
        toggleSignUpModal={toggleSignUpModal}
      />
      <ForgetPassModal
        openForgetPassModal={openForgetPassModal}
        toggleForgetPassModal={toggleForgetPassModal}
      />
    </nav>
  );
};

export default Navbar;
