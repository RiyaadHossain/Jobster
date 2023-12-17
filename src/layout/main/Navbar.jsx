import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { toast } from "react-hot-toast";
import Sidebar from "./Sidebar";
import { navbarItems } from "../../constants/navbarItems";
import { ENUM_AUTH_MODAL } from "../../enum/authModal";
import { Link, useLocation } from "react-router-dom";
import SignInModal from "../../components/auth-modals/SignInModal";
import SignUpModal from "../../components/auth-modals/SignUpModal";
import ForgetPassModal from "../../components/auth-modals/ForgetPassModal";
import ProfileMenu from "../components/ProfileMenu";
import Logo from "../../components/ui/Logo";
import SignInButton from "./components/SignInButton";
import "./style/module.style.css"

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navbarRef = useRef(null);
  const { pathname } = useLocation();

  const [openAuthModal, setOpenAuthModal] = useState(null);

  const email = null;

  useEffect(() => {
    // Show Navbar background when scroll down
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        navbarRef.current.classList.add("nav_white");
      } else {
        navbarRef.current.classList.remove("nav_white");
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
    toast.success("Sign Out successfully", { id: "signout" });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-y-hidden");
  };

  const toggleAuthModal = () => {
    setOpenAuthModal(ENUM_AUTH_MODAL.signIn);
    document.body.classList.toggle("overflow-y-hidden");
  };

  const isHomeRoute = pathname === "/";
  const mediumDevice = window.innerWidth <= 1020;

  return (
    <nav>
      <div
        ref={navbarRef}
        className={`h-20 fixed top-0 w-full z-20 `} /* ${!isHomeRoute && "border-b"} */
      >
        <ul className="max_container mx-auto justify-between flex gap-3 h-full items-center">
          <li className=" font-bold text-2xl">
            <div className="flex items-center gap-6">
              <Logo />
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
                    <Link
                      className="hover:text-primary transition-colors"
                      to={item.link}
                    >
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
                <SignInButton toggleAuthModal={toggleAuthModal} />
              </li>
            )}
          </div>
        </ul>
      </div>

      {/* Sidebar Menu */}
      <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <div
        onClick={toggleMenu}
        className={`w-screen h-screen bg-black/70 ${
          menuOpen ? "block" : "hidden"
        } fixed z-20 top-0`}
      ></div>

      <SignInModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
      <SignUpModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
      <ForgetPassModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
    </nav>
  );
};

export default Navbar;
