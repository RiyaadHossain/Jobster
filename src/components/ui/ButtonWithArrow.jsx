import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ButtonWithArrow({ link, display, mt }) {
  return (
    <div className={`flex justify-center items-center ${mt}`}>
      <Link to={link} className={`btn_primary flex gap-2 items-center hover:gap-5 duration-200`}>
        <span> {display}</span> <IoIosArrowForward />
      </Link>
    </div>
  );
}
