import "./style/module.style.css";
import FormInput from "../form/FormInput";
import { capitalizeFirstLetter } from "../../utils/capitalizeLetter";

export default function InputWithButton({
  name,
  inputRef,
  onChange,
  appendData,
}) {
  return (
    <div className="relative flex">
      <FormInput
        name={name}
        type="text"
        inputRef={inputRef}
        className="w-full"
        handleOnChange={onChange}
        divClass="mb-0 flex-grow"
      />
      <button type="button" onClick={appendData} className="input_btn">
        Add {capitalizeFirstLetter(name)}
      </button>
    </div>
  );
}
