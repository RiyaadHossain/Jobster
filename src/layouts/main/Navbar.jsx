import "./style/module.style.css";
import { useRef, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { navbarItems } from "@/constants/navbarItems";
import { ENUM_AUTH_MODAL } from "@/enums/authModal";
import { Link, useLocation } from "react-router-dom";
import SignInModal from "@/components/auth-modals/SignInModal";
import SignUpModal from "@/components/auth-modals/SignUpModal";
import ForgetPassModal from "@/components/auth-modals/ForgetPassModal";
import Logo from "@/components/ui/Logo";
import SignInButton from "./components/SignInButton";
import ProfileMenu from "../components/ProfileMenu";
import { isLoggedIn } from "@/services/auth.services";
import { useScrollDown } from "@/hooks/useScrollDownl";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navbarRef = useRef(null);
  const { pathname } = useLocation();
  const [openAuthModal, setOpenAuthModal] = useState(null);

  const userLoggedIn = isLoggedIn();

  // Handle Scroll Down Event
  useScrollDown(navbarRef, 100);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-y-hidden");
  };

  const toggleAuthModal = () => {
    setOpenAuthModal(ENUM_AUTH_MODAL.SIGN_IN);
    document.body.classList.toggle("overflow-y-hidden");
  };

  const isHomeRoute = pathname === "/";
  const mediumDevice = window.innerWidth <= 1020;

  return (
    <nav>
      <div ref={navbarRef} className={`h-20 fixed top-0 w-full z-20 `}>
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
            {userLoggedIn ? (
              <li>
                <ProfileMenu />
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
