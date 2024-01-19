import { useRef, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputWithButton from "@/components/dashboard/InputWithButton";
import DynamicTextField from "@/components/dashboard/DynamicTextField";

export default function AddSkill() {
  const inputRef = useRef(null);
  const [skill, setSkill] = useState({});
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });

  const appendData = () => {
    if (Object.keys(skill).length) {
      append(skill);
      setSkill({});
      inputRef.current.value = "";
    }
  };

  const onChange = (title) => setSkill({ title });

  return (
    <div>
      <DynamicTextField
        fields={fields}
        remove={remove}
        text={15}
        rounded="md"
      />
      <InputWithButton
        name="skill"
        appendData={appendData}
        inputRef={inputRef}
        onChange={onChange}
      />
    </div>
  );
}
