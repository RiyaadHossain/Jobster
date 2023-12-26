import { useState } from "react";
import FormInput from "../form/FormInput";
import FormTextarea from "../form/FormTextarea";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IoTrashOutline } from "react-icons/io5";

export default function AddEducation() {
  const [openEdu, setOpenEdu] = useState(false);
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "educationTraining",
    control,
  });

  const [itemIndex, setItemIndex] = useState(0);
  console.log(fields);

  return (
    <div className="mt-8">
      <div className="mb-8">
        <table className="w-full">
          <tbody>
            {fields.map((field, i) => (
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
                    <button
                      type="button"
                      onClick={remove}
                      className="bg-primaryLight p-1 rounded-md text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <IoTrashOutline className="" size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openEdu ? (
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <FormInput
                id="courseOfStudy"
                name="courseOfStudy"
                label="Course of Study"
                placeholder="E.g. Finance"
                type="text"
              />
            </div>
            <div className="col-span-1">
              <FormInput
                id="institution"
                name="institution"
                label="Institution"
                placeholder="E.g. Oxford University"
                type="text"
              />
            </div>
            <div className="col-span-1">
              <FormInput
                id="timePeriod"
                name="timePeriod"
                label="Time Period"
                placeholder="E.g. 2007 - 2012"
                type="text"
              />
            </div>
          </div>

          <FormTextarea
            rows={6}
            id="description"
            name="description"
            label="Description"
            placeholder="Type a short description..."
            inputClass="resize-none"
          />

          <div className="flex gap-5 items-center">
            <button
              type="button"
              onClick={(e) => {
                append();
                // setOpenEdu(false);
                // e.preventDefault();
              }}
              className="btn_accent"
            >
              Add
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenEdu(false);
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
            setOpenEdu(true);
          }}
          className="btn_accent"
        >
          Add Education
        </button>
      )}
    </div>
  );
}
