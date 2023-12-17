import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function PreviousBtn() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="btn_primary flex items-center gap-4">
      <BsFillArrowLeftCircleFill className="text-base" /> Back
    </button>
  );
}
