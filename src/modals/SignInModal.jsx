import React from "react";
import Modal from "../components/modal/Modal";
import signInImg from "../assets/signin-fig.png";
import FormInput from "../components/form/FormInput";
import { ENUM_AUTH_MODAL } from "../enum/authModal";

export default function SignInModal({ openAuthModal, setOpenAuthModal }) {
  const onSignUpHandle = () => setOpenAuthModal(ENUM_AUTH_MODAL.signUp);

  const onModalClose = () => {
    document.body.classList.toggle("overflow-y-hidden");
    setOpenAuthModal(null);
  };

  return (
    <Modal
      openModal={openAuthModal === ENUM_AUTH_MODAL.signIn}
      toggleModal={onModalClose}
    >
      <div className="">
        <img src={signInImg} alt="" className="h-[120px] w-auto" />
      </div>
      <h5 className="font-semibold text-[22px] tracking-tight  mt-6">
        Welcome Back!
      </h5>
      <form action="" className="w-full mt-6">
        <FormInput id="email" placeholder="Email Address" type="email" />
        <FormInput id="password" placeholder="Password" type="password" />
        <button className="btn_secondary w-full">Continue</button>
        <div className="text-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenAuthModal(ENUM_AUTH_MODAL.forgetPass);
            }}
            className="mt-6 text-sm font-light text-primary cursor-pointer"
          >
            Forget Password
          </button>
          <div className="mt-6 text-sm font-light">
            Already Have an account?{" "}
            <span
              onClick={onSignUpHandle}
              className="text-primary cursor-pointer"
            >
              Sign In
            </span>
          </div>
        </div>
      </form>
    </Modal>
  );
}
