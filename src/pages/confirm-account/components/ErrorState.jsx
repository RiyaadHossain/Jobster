import React from "react";
import { FaTimes } from "react-icons/fa";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export default function ErrorState({ errorMessage }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <FaTimes
        className="text-center text-red-600 rounded-full border border-red-400"
        size={26}
      />
      <p className="text-xl">{errorMessage}</p>
      <ButtonPrimary onClickFunc={() => navigate("/")} display="Sign Up" />
    </div>
  );
}
