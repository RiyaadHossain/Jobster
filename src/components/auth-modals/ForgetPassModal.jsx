import Modal from "../modal/Modal";
import FormInput from "../form/FormInput";
import forgetPassImg from "../../assets/forget-pass-fig.png";
import { ENUM_AUTH_MODAL } from "../../enums/authModal";
import "./styles/module.style.css";

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
      <div>
        <img src={forgetPassImg} alt="" className="modal_img" />
      </div>
      <h5 className="modal_title">Forgot Password</h5>
      <form action="" className="w-full mt-6">
        <FormInput id="email" placeholder="Email Address" type="email" />
        <button className="btn_secondary w-full">Get New Password</button>
      </form>
    </Modal>
  );
}
