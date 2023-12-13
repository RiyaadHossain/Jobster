import "./modal.style.css";

export default function Modal({ openModal, toggleModal, children }) {
  return (
    <div
      onClick={toggleModal}
      className={`${
        openModal ? "visible " : "invisible"
      } h-screen flex w-screen fixed top-0 left-0 z-30 bg-black/70 items-center justify-center duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          openModal ? "translate-y-5 opacity-100" : "translate-y-0 opacity-0"
        } p-10 bg-white shadow-lg rounded-3xl relative w-[500px] flex_cen flex-col transition-all duration-[400ms]`}
      >
        <span
          onClick={toggleModal}
          className="absolute top-6 right-6 text-4xl font-light text-accent hover:text-black cursor-pointer"
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}
