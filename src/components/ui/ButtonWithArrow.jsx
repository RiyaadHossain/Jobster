import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ButtonWithArrow({ link, display, mt, onHandleClick }) {
  if (onHandleClick)
    return (
      <button
        onClick={onHandleClick}
        className={`flex justify-center items-center ${mt}`}
      >
        <div className="btn_primary flex gap-2 items-center hover:gap-5 duration-200">
          <span>{display}</span> <IoIosArrowForward />
        </div>
      </button>
    );

  return (
    <div className={`flex justify-center items-center ${mt}`}>
      <Link
        to={link}
        className={`btn_primary flex gap-2 items-center hover:gap-5 duration-200`}
      >
        <span> {display}</span> <IoIosArrowForward />
      </Link>
    </div>
  );
}
