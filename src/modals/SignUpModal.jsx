import signUpImg from "../assets/signup-fig.png";
import FormInput from "../components/form/FormInput";
import "./module.style.css";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import { USER_ROLE } from "../enum/userRole";

export default function SignUpModal({
  openSignUpModal,
  toggleSignUpModal,
}) {
  const [role, setRole] = useState(USER_ROLE.candidate);

  const onSignInHandle = () => {
    toggleSignUpModal();
  };

  return (
    <Modal openModal={openSignUpModal} toggleModal={toggleSignUpModal}>
      <div className="">
        <img src={signUpImg} alt="" className="h-[120px] w-auto" />
      </div>
      <h5 className="font-semibold text-[22px] tracking-tight  mt-6">
        Create an account
      </h5>
      <div className="flex mt-5">
        <div
          onClick={() => setRole(USER_ROLE.candidate)}
          className={`${
            role === USER_ROLE.candidate ? "radio_role_active" : "radio_role"
          } rounded-l-3xl`}
        >
          I'm candidate
        </div>
        <div
          onClick={() => setRole(USER_ROLE.company)}
          className={`${
            role === USER_ROLE.company ? "radio_role_active" : "radio_role"
          }  rounded-r-3xl`}
        >
          I'm company
        </div>
      </div>
      <form action="" className="w-full mt-6">
        {role === USER_ROLE.company ? (
          <FormInput id="companyName" placeholder="Company Name" type="text" />
        ) : (
          <div className="flex gap-3">
            <FormInput
              id="firstName"
              placeholder="First Name"
              type="text"
              divClass="flex-grow w-1/2"
            />
            <FormInput
              id="lastName"
              placeholder="Last Name"
              type="text"
              divClass="flex-grow w-1/2"
            />
          </div>
        )}
        <FormInput id="email" placeholder="Email Address" type="email" />
        <FormInput
          id="password"
          placeholder="Create Password"
          type="password"
        />
        <button className="btn_secondary w-full">Continue</button>
        <div className="text-center">
          <div className="mt-6 text-sm font-light text-primary cursor-pointer">
            Forget Password
          </div>
          <div className="mt-6 text-sm font-light">
            Already Have an account?{" "}
            <span
              onClick={onSignInHandle}
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
