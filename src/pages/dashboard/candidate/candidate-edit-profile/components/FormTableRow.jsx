import React from "react";
import { IoTrashOutline } from "react-icons/io5";

export default function FormTableRow({ fields, remove }) {
  const renderFieldData = (field, index) => {
    const filteredEntries = Object.entries(field).filter(
      ([key]) => key !== "id" && key !== "description"
    );

    return (
      <React.Fragment key={index}>
        {filteredEntries.map(([key, value], dataIndex) => (
          <td key={key} className="w-[30%]">
            <div
              className={`leading-5 ${
                dataIndex === 0 ? "font-medium text-base" : "font-light text-sm"
              }`}
            >
              {value}
            </div>
          </td>
        ))}
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
