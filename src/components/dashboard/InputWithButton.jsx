import "./style/module.style.css";
import { capitalizeFirstLetter } from "@/utils/capitalizeLetter";

export default function InputWithButton({
  name,
  inputRef,
  onChange,
  appendData,
}) {
  return (
    <div className="relative flex">
      <input
        ref={inputRef}
        name={name}
        type="text"
        className={`w-full`}
        onChange={(e) => onChange(e.target.value, name)}
      />
      <button type="button" onClick={appendData} className="input_btn">
        Add {capitalizeFirstLetter(name)}
      </button>
    </div>
  );
}
