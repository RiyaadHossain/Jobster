import Modal from "../modal/Modal";
import signInImg from "../../assets/signin-fig.png";
import { ENUM_AUTH_MODAL } from "../../enums/authModal";
import FormInputIcon from "../form/FormInputIcon";
import { IoMail, IoLockClosed } from "react-icons/io5";
import Form from "../form/Form";

export default function SignInModal({ openAuthModal, setOpenAuthModal }) {
  const onSignUpHandle = () => setOpenAuthModal(ENUM_AUTH_MODAL.SIGN_UP);

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
      openModal={openAuthModal === ENUM_AUTH_MODAL.SIGN_IN}
      toggleModal={onModalClose}
    >
      <div className="">
        <img src={signInImg} alt="" className="modal_img" />
      </div>
      <h5 className="modal_title">Welcome Back!</h5>
      <Form submitHandler={onSubmit} className="w-full mt-6">
        <FormInputIcon
          id="email_sign_in"
          name="email"
          placeholder="Email"
          type="email"
          icon={<IoMail className="input_icon" size={18} />}
        />
        <FormInputIcon
          id="password_sign_in"
          name="password"
          placeholder="Password"
          type="password"
          icon={<IoLockClosed className="input_icon" size={18} />}
        />
        <button type="submit" className="btn_secondary w-full">
          Continue
        </button>
        <div className="text-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenAuthModal(ENUM_AUTH_MODAL.FORGET_PASS);
            }}
            className="mt-6 text-sm font-light text-primary cursor-pointer"
          >
            Forget Password
          </button>
          <div className="mt-6 text-sm font-light">
            New to Jobster?
            <span
              onClick={onSignUpHandle}
              className="text-primary cursor-pointer ml-1"
            >
              Create an account
            </span>
          </div>
        </div>
      </Form>
    </Modal>
  );
}
