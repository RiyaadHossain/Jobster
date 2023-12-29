import React from "react";
import { IoTrashOutline } from "react-icons/io5";

export default function DynamicTextField({
  fields,
  remove,
  text,
  rounded,
  divClass,
}) {
  return (
    <>
      {fields.length ? (
        <div className={`mb-4 gap-2 ${divClass}`}>
          {fields.map((skill, i) => (
            <div
              key={skill.id}
              className={`bg-primaryLight font-light w-fit px-[16px] py-[6px] mb-2 rounded-${rounded} text-primaryDark text-[${text}px] flex items-center gap-2`}
            >
              <p>
                {i + 1}. {skill.title}
              </p>
              <IoTrashOutline
                onClick={() => remove(i)}
                className="cursor-pointer"
                size="13"
              />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
