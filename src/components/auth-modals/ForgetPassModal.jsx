import Modal from "../modal/Modal";
import forgetPassImg from "@/assets/forget-pass-fig.png";
import { ENUM_AUTH_MODAL } from "@/enums/authModal";
import "./styles/module.style.css";
import FormInputIcon from "../form/FormInputIcon";
import { IoMail } from "react-icons/io5";
import Form from "../form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPassSchema } from "@/schema/forgetPass";

export default function ForgetPassModal({ openAuthModal, setOpenAuthModal }) {
  const onModalClose = () => {
    document.body.classList.toggle("overflow-y-hidden");
    setOpenAuthModal(null);
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
      <Form
        className="w-full mt-6"
        submitHandler={onSubmit}
        resolver={yupResolver(forgetPassSchema)}
      >
        <FormInputIcon
          id="email_forget_pass"
          name="email"
          placeholder="Email"
          type="email"
          icon={<IoMail className="input_icon" size={18} />}
        />
        <button className="btn_secondary w-full">Get New Password</button>
      </Form>
    </Modal>
  );
}
