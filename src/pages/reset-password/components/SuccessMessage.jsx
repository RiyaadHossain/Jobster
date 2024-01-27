import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export default function SuccessMessage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <FaCheckCircle
        className="text-center text-green-600 rounded-full border border-green-400"
        size={26}
      />
      <p className="text-xl">
        Password has been reset Succesfully. <br /> Please signup now.
      </p>
      <ButtonPrimary onClickFunc={() => navigate("/")} display="Sign In" />
    </div>
  );
}
