import React from "react";
import { IoTrashOutline } from "react-icons/io5";

export default function FormTableRow({ fields, remove }) {
  return (
    <table className="w-full">
      <tbody>
        {fields.map((field, i) => (
          <tr key={field.id} className="border-b [&>*]:p-2">
            <td className="w-[30%]">
              <h3 className="text-base font-semibold leading-6 hover:opacity-[0.5] transition-colors">
                {field[Object.keys(field)[0]]}
              </h3>
            </td>
            <td className="w-[25%] opacity-[0.8]">
              <div className="text-sm font-light leading-5">
                {field[Object.keys(field)[1]]}
              </div>
            </td>
            <td className="w-[25%] gap-2">
              <div className="text-sm font-light leading-5">
                {field[Object.keys(field)[2]]}
              </div>
            </td>
            <td className="w-[10%] text-sm font-medium leading-5 ">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => remove(i)}
                  className="inside_table_icon"
                >
                  <IoTrashOutline className="" size={15} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
