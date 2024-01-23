import { useRef, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import InputWithButton from "@/components/dashboard/InputWithButton";
import DynamicTextField from "@/components/dashboard/DynamicTextField";

export default function AddSkill({ skills, setSkills }) {
  const inputRef = useRef(null);
  const [skill, setSkill] = useState({});
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });

  const appendData = () => {
    const exist = fields.find((item) => item.title === skill.title);

    if (Object.keys(skill).length) {
      !exist && append(skill);
      setSkill({});
      inputRef.current.value = "";
    }

    setSkills((prev) => [...prev, fields]);
  };

  const onChange = (title) => setSkill({ title });

  return (
    <div>
      <DynamicTextField
        fields={fields}
        remove={remove}
        text={13}
        rounded="full"
        divClass="flex flex-wrap"
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
