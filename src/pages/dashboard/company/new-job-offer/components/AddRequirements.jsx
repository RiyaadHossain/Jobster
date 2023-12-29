import { useRef, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputWithButton from "@/components/dashboard/InputWithButton";
import DynamicTextField from "@/components/dashboard/DynamicTextField";

export default function AddRequirement() {
  const inputRef = useRef(null);
  const [requirement, setRequirement] = useState({});
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "requirements",
    control,
  });

  const appendData = () => {
    if (Object.keys(requirement).length) {
      append(requirement);
      setRequirement({});
      inputRef.current.value = "";
    }
  };

  const onChange = (title) => setRequirement({ title });

  return (
    <div>
      <DynamicTextField
        fields={fields}
        remove={remove}
        text={15}
        rounded="md"
      />
      <InputWithButton
        name="requirement"
        appendData={appendData}
        inputRef={inputRef}
        onChange={onChange}
      />
    </div>
  );
}
