import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../../helpers/ScrollToTop";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <ScrollToTop />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
