import React from "react";
import Modal from "../components/modal/Modal";
import FormInput from "../components/form/FormInput";
import forgetPassImg from "../assets/forget-pass-fig.png";
import { ENUM_AUTH_MODAL } from "../enum/authModal";

export default function ForgetPassModal({ openAuthModal, setOpenAuthModal }) {
  const onModalClose = () => {
    document.body.classList.toggle("overflow-y-hidden");
    setOpenAuthModal(null);
  };

  return (
    <Modal
      openModal={openAuthModal === ENUM_AUTH_MODAL.forgetPass}
      toggleModal={onModalClose}
    >
      <div className="">
        <img src={forgetPassImg} alt="" className="h-[120px] w-auto" />
      </div>
      <h5 className="font-semibold text-[22px] tracking-tight  mt-6">
        Forgot Password
      </h5>
      <form action="" className="w-full mt-6">
        <FormInput id="email" placeholder="Email Address" type="email" />
        <button className="btn_secondary w-full">Get New Password</button>
      </form>
    </Modal>
  );
}
