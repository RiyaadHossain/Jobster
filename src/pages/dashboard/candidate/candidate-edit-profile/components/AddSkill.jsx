import { useRef, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IoTrashOutline } from "react-icons/io5";
import FormInput from "../../../../../components/form/FormInput";

export default function AddSkill() {
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
  };

  const onChange = (title) => setSkill({ title });

  return (
    <div>
      {fields.length ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {fields.map((skill, i) => (
            <div
              key={skill.id}
              className={`bg-primaryLight font-light w-fit px-[16px] py-[6px] rounded-full text-primaryDark text-[13px] flex items-center gap-2`}
            >
              <p>{skill.title}</p>
              <IoTrashOutline
                onClick={() => remove(i)}
                className="cursor-pointer"
                size="13"
              />
            </div>
          ))}
        </div>
      ) : null}
      <div className="relative flex">
        <FormInput
          name="skill"
          type="text"
          inputRef={inputRef}
          className="w-full"
          handleOnChange={onChange}
          divClass="mb-0 flex-grow"
        />
        <button
          type="button"
          onClick={appendData}
          className="h-full skill_btn absolute right-0"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
}
