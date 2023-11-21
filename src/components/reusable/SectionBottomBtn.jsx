import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SectionBottomBtn({ display, link }) {
  return (
    <div className="flex justify-center items-center mt-12">
      <Link to={link} className="btn-secondary flex gap-1 items-center">
        <span> {display}</span> <IoIosArrowForward />
      </Link>
    </div>
  );
}
