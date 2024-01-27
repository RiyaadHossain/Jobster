import { useNavigate, useParams } from "react-router-dom";
import resetPassSVG from "../../assets/svgs/forget-pass.svg";
import Logo from "../../components/ui/Logo";
import ButtonPrimary from "../../components/ui/ButtonPrimary";
import PasswordResetForm from "./components/PasswordResetForm";
import { useState } from "react";
import SuccessMessage from "./components/SuccessMessage";

export default function ForgetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [passwordReset, setPasswordReset] = useState(false);

  return (
    <div className="">
      <div className="border-b">
        <div className="flex justify-between items-center max_container my-4">
          <Logo />
          <ButtonPrimary onClickFunc={() => navigate("/")} display="Go Home" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 px-6 py-20">
        <div className="hidden md:col-span-1 md:flex justify-center items-center">
          <img className="w-96" src={resetPassSVG} alt="" />
        </div>
        {!passwordReset ? (
          <PasswordResetForm
            token={token}
            setPasswordReset={setPasswordReset}
          />
        ) : (
          <SuccessMessage />
        )}
      </div>
    </div>
  );
}
