import Modal from "../modal/Modal";
import signInImg from "../../assets/signin-fig.png";
import { ENUM_AUTH_MODAL } from "../../enums/authModal";
import FormInputIcon from "../form/FormInputIcon";
import { IoMail, IoLockClosed } from "react-icons/io5";

export default function SignInModal({ openAuthModal, setOpenAuthModal }) {
  const onSignUpHandle = () => setOpenAuthModal(ENUM_AUTH_MODAL.SIGN_UP);

  const onModalClose = () => {
    document.body.classList.toggle("overflow-y-hidden");
    setOpenAuthModal(null);
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
        <FormInputIcon
          id="password"
          placeholder="Password"
          type="password"
          icon={
            <IoLockClosed
              className="absolute right-5 pointer-events-none"
              size={18}
            />
          }
        />
        <button className="btn_secondary w-full">Continue</button>
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
