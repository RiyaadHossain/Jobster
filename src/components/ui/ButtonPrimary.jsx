import ButtonSpinner from "./ButtonSpinner";

export default function ButtonPrimary({
  display,
  onClickFunc,
  isLoading,
  className,
  attributes,
}) {
  return (
    <button onClick={onClickFunc} className={className} {...attributes}>
      {isLoading ? <ButtonSpinner /> : display}
    </button>
  );
}
