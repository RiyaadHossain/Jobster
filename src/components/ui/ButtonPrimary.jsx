export default function ButtonPrimary({ display, onClickFunc, attributes }) {
  return (
    <button onClick={onClickFunc} className="btn_primary" {...attributes}>
      {display}
    </button>
  );
}
