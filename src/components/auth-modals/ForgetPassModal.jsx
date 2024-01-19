import Modal from "../modal/Modal";
import forgetPassImg from "@/assets/images/auth/forget-pass-fig.png";
import { ENUM_AUTH_MODAL } from "@/enums/authModal";
import "./styles/module.style.css";
import FormInputIcon from "../form/FormInputIcon";
import { IoMail } from "react-icons/io5";
import Form from "../form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPassSchema } from "@/schema/forgetPass";
import { catchAsync } from "../../helpers/catchAsync";
import { useForgetPasswordMutation } from "../../redux/api/auth";
import toast from "react-hot-toast";
import ButtonPrimary from "../ui/ButtonPrimary";

export default function ForgetPassModal({ openAuthModal, setOpenAuthModal }) {
  const onModalClose = () => {
    document.body.classList.toggle("overflow-y-hidden");
    setOpenAuthModal(null);
  };

  const [forgetPass, { isLoading }] = useForgetPasswordMutation();

  const onSubmit = catchAsync(async (data) => {
    const res = await forgetPass(data).unwrap();
    onModalClose();
    toast.success(res?.message);
  });

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
        <ButtonPrimary
          className="btn_secondary w-full"
          display="Get New Password"
          isLoading={isLoading}
        />
      </Form>
    </Modal>
  );
}
