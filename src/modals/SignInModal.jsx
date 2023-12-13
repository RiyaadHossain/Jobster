import React from "react";
import Modal from "../components/modal/Modal";
import signInImg from "../assets/signin-fig.png";
import FormInput from "../components/form/FormInput";

export default function SignInModal({
  openSignInModal,
  toggleSignInModal,
}) {
  const onSignUpHandle = () => {
    toggleSignInModal();
  };

  return (
    <Modal openModal={openSignInModal} toggleModal={toggleSignInModal}>
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
          <div className="mt-6 text-sm font-light text-primary cursor-pointer">
            Forget Password
          </div>
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
