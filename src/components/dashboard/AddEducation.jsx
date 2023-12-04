import { useState } from "react";
import FormInput from "../form/FormInput";
import FormTextarea from "../form/FormTextarea";

export default function AddEducation() {
  const [openEdu, setOpenEdu] = useState(false);

  return (
    <div className="mt-8">
      {openEdu ? (
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <FormInput
                id="course_of_study"
                label="Course of Study"
                placeholder="E.g. Finance"
                type="text"
              />
            </div>
            <div className="col-span-1">
              <FormInput
                id="institution"
                label="Institution"
                placeholder="E.g. Oxford University"
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
                setOpenEdu(false);
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
