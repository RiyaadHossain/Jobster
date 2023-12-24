import { useState } from "react";
import signUpImg from "../../assets/signup-fig.png";
import Modal from "../modal/Modal";
import FormInput from "../form/FormInput";
import { ENUM_USER_ROLE } from "../../enums/userRole";
import { ENUM_AUTH_MODAL } from "../../enums/authModal";
import "./styles/module.style.css";

export default function SignUpModal({ openAuthModal, setOpenAuthModal }) {
  const [role, setRole] = useState(ENUM_USER_ROLE.candidate);

  const onSignInHandle = () => setOpenAuthModal(ENUM_AUTH_MODAL.signIn);
  const onModalClose = () => {
    document.body.classList.toggle("overflow-y-hidden");
    setOpenAuthModal(null);
  };

  return (
    <Modal
      openModal={openAuthModal === ENUM_AUTH_MODAL.signUp}
      toggleModal={onModalClose}
    >
      <div className="">
        <img src={signUpImg} alt="" className="modal_img" />
      </div>
      <h5 className="modal_title">Create an account</h5>

      <div className="flex mt-5">
        <div
          onClick={() => setRole(ENUM_USER_ROLE.candidate)}
          className={`${
            role === ENUM_USER_ROLE.candidate
              ? "radio_role_active"
              : "radio_role"
          } rounded-l-3xl`}
        >
          I'm candidate
        </div>
        <div
          onClick={() => setRole(ENUM_USER_ROLE.company)}
          className={`${
            role === ENUM_USER_ROLE.company ? "radio_role_active" : "radio_role"
          }  rounded-r-3xl`}
        >
          I'm company
        </div>
      </div>

      <form action="" className="w-full mt-6">
        {role === ENUM_USER_ROLE.company ? (
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
