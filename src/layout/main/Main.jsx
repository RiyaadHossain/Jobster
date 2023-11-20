import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
