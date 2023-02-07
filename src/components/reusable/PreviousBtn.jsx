import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function PreviousBtn() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 bg-slate-600 w-28 justify-center rounded-md py-2 text-white mt-8"
    >
      <BsFillArrowLeftCircleFill /> Back
    </button>
  );
}
