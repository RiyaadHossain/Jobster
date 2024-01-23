import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { ENUM_EDU_EXP } from "../../../../../enums/candidate";

export default function FormTableRow({ fields, remove, type }) {
  const renderFieldData = (field, index) => {
    return (
      <React.Fragment key={index}>
        <td className="w-[30%]">
          <div className="leading-5 font-medium text-base">
            {type === ENUM_EDU_EXP.EDU ? field?.courseName : field?.position}
          </div>
        </td>
        <td className="w-[30%]">
          <div className="leading-5 font-light text-sm">
            {type === ENUM_EDU_EXP.EDU
              ? field?.institution
              : field?.company}
          </div>
        </td>
        <td className="w-[30%]">
          <div className="leading-5 font-light text-sm">
            {field?.timePeriod}
          </div>
        </td>

        <td className="w-[10%] text-sm font-medium leading-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => remove(index)}
              className="btn_icon"
            >
              <IoTrashOutline className="" size={15} />
            </button>
          </div>
        </td>
      </React.Fragment>
    );
  };

  return (
    <table className="w-full">
      <tbody>
        {fields.map((field, i) => (
          <tr key={field.id} className="border-b [&>*]:p-2">
            {renderFieldData(field, i)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
