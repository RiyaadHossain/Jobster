import { useState } from "react";
import FormInput from "../form/FormInput";
import FormTextarea from "../form/FormTextarea";
import { IoTrashOutline } from "react-icons/io5";

export default function AddExp() {
  const [openExp, setOpenExp] = useState(false);

  return (
    <div className="mt-8">
      <div className="mb-5">
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <td className="w-[30%] p-2">
                <h3 className="text-base font-semibold leading-6 hover:opacity-[0.5] transition-colors">
                  Financial Analyst
                </h3>
              </td>
              <td className="w-[25%] p-2 text-sm font-light leading-5 opacity-[0.8]">
                <div className="text-sm font-light leading-5">Finance</div>
              </td>
              <td className="w-[25%] p-2 gap-2">
                <div className="text-sm font-light leading-5">
                  San Dieago, SA
                </div>
              </td>
              <td className="w-[10%] p-2 text-sm font-medium leading-5 ">
                <div className="flex justify-end">
                  <span className="bg-light p-1 rounded-md text-primary hover:bg-primary hover:text-white transition-colors">
                    <IoTrashOutline className="" size={15} />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {openExp ? (
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <FormInput
                id="job_title"
                label="Job Title"
                placeholder="E.g. Web Developer"
                type="text"
              />
            </div>
            <div className="col-span-1">
              <FormInput
                id="company_ame"
                label="Company Name"
                placeholder="E.g. Apple"
                type="text"
              />
            </div>
            <div className="col-span-1">
              <FormInput
                id="time_period"
                label="Time Period"
                placeholder="E.g. 2007 - 2012"
                type="text"
              />
            </div>
          </div>

          <FormTextarea
            rows={6}
            id="description"
            label="Description"
            placeholder="Type a short description..."
            inputClass="resize-none"
          />

          <div className="flex gap-5 items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenExp(false);
              }}
              className="btn_accent"
            >
              Add
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenExp(false);
              }}
              className="font-semibold text-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenExp(true);
          }}
          className="btn_accent"
        >
          Add Experience
        </button>
      )}
    </div>
  );
}
