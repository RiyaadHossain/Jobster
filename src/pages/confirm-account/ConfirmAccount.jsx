import React from "react";
import Logo from "@/components/ui/Logo";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { useNavigate, useParams } from "react-router-dom";
import successSVG from "@/assets/svgs/acount-confirm-success.svg";
import errorSVG from "@/assets/svgs/confirm-account-error.svg";
import { useConfirmAccountQuery } from "@/redux/api/user";
import LoadingState from "./components/LoadingState";
import SuccessState from "./components/SuccessState";
import ErrorState from "./components/ErrorState";

export default function ConfirmAccount() {
  const { name, token } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useConfirmAccountQuery({ name, token });

  const success = data?.success;
  const errorMessage =
    data?.message || "Failed to activate your account. Please sign up again.";

  return (
    <div>
      <div className="border-b">
        <div className="flex justify-between items-center max_container my-4">
          <Logo />
          <ButtonPrimary onClickFunc={() => navigate("/")} display="Go Home" />
        </div>
      </div>
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="grid grid-cols-2 gap-12 px-6 py-20">
          <div className="hidden md:col-span-1 md:flex justify-center items-center">
            <img
              className="w-96"
              src={success ? successSVG : errorSVG}
              alt=""
            />
          </div>
          {success ? (
            <SuccessState />
          ) : (
            <ErrorState errorMessage={errorMessage} />
          )}
        </div>
      )}
    </div>
  );
}
