import { useRef, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

export default function AddSkill({ skills, setSkills }) {
  const inputRef = useRef(null);
  const [skill, setSkill] = useState();

  const appendSkill = (skill) => {
    const exist = skills.find((item) => item === skill);

    if (skill) {
      !exist && setSkills([...skills, skill]);
      setSkill("");
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      {skills.length && (
        <div className="mb-4 flex gap-2">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`bg-primary/10 font-light w-fit px-[17px] py-[7px] rounded-full text-primary text-[13px] flex items-center gap-2`}
            >
              <p>{skill}</p>
              <IoTrashOutline
                onClick={() =>
                  setSkills(skills.filter((item) => item !== skill))
                }
                className="text-primary cursor-pointer group-hover:text-white transition-all"
                size="13"
              />
            </div>
          ))}
        </div>
      )}
      <div className="relative">
        <input
          type="text"
          ref={inputRef}
          className="w-full"
          defaultValue={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            appendSkill(skill);
          }}
          className="h-full skill_btn absolute right-0"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
}
