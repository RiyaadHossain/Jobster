import Modal from "../modal/Modal";
import forgetPassImg from "../../assets/forget-pass-fig.png";
import { ENUM_AUTH_MODAL } from "../../enums/authModal";
import "./styles/module.style.css";
import FormInputIcon from "../form/FormInputIcon";
import { IoMail } from "react-icons/io5";

export default function ForgetPassModal({ openAuthModal, setOpenAuthModal }) {
  const onModalClose = () => {
    document.body.classList.toggle("overflow-y-hidden");
    setOpenAuthModal(null);
  };

  return (
    <Modal
      openModal={openAuthModal === ENUM_AUTH_MODAL.FORGET_PASS}
      toggleModal={onModalClose}
    >
      <div>
        <img src={forgetPassImg} alt="" className="modal_img" />
      </div>
      <h5 className="modal_title">Forgot Password</h5>
      <form action="" className="w-full mt-6">
        <FormInputIcon
          id="email"
          placeholder="Email"
          type="email"
          icon={
            <IoMail
              className="absolute right-5 pointer-events-none"
              size={18}
            />
          }
        />
        <button className="btn_secondary w-full">Get New Password</button>
      </form>
    </Modal>
  );
}
