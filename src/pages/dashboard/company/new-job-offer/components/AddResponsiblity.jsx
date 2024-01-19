import { useRef, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputWithButton from "@/components/dashboard/InputWithButton";
import DynamicTextField from "@/components/dashboard/DynamicTextField";

export default function AddResponsiblity() {
  const inputRef = useRef(null);
  const [responsiblity, setResponsiblity] = useState({});
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "responsibilities",
    control,
  });

  const appendData = () => {
    if (Object.keys(responsiblity).length) {
      append(responsiblity);
      setResponsiblity({});
      inputRef.current.value = "";
    }
  };

  const onChange = (title) => setResponsiblity({ title });

  return (
    <div>
      <DynamicTextField
        fields={fields}
        remove={remove}
        text={15}
        rounded="md"
      />
      <InputWithButton
        name="responsiblity"
        appendData={appendData}
        inputRef={inputRef}
        onChange={onChange}
      />
    </div>
  );
}
