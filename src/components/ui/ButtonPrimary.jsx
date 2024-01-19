import ButtonSpinner from "./ButtonSpinner";

export default function ButtonPrimary({
  display,
  onClickFunc,
  isLoading,
  className,
  ...attributes
}) {
  return (
    <button onClick={onClickFunc} className={className || "btn_primary"} {...attributes}>
      {isLoading ? <ButtonSpinner /> : display}
    </button>
  );
}
