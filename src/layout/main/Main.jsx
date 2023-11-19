import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className={` ${
          pathname === "/" ? "max-w-[1600px] px-5" : "max-w-7xl"
        } max-w-[1600px] mx-auto`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
