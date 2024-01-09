import { useNavigate, useParams } from "react-router-dom";
import resetPassSVG from "../../assets/svgs/undraw_my_password_re_ydq7.svg";
import Logo from "../../components/ui/Logo";
import ButtonPrimary from "../../components/ui/ButtonPrimary";
import PasswordResetForm from "./components/PasswordResetForm";
import { FaCheckCircle } from "react-icons/fa";

export default function ForgetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const isPasswordReset = false;

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
          {!isPasswordReset ? (
            <PasswordResetForm token={token} />
          ) : (
            <div className="flex items-center gap-5">
              <FaCheckCircle
                className="text-center text-green-600 rounded-full border border-green-400"
                size={24}
              />
              <p className="text-xl">
                Password has been reset Succesfully. <br /> Please signup.
              </p>
            </div>
          )}
        </div>
    </div>
  );
}
