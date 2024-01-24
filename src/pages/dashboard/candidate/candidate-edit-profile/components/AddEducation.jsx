import {  useRef } from "react";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormTableRow from "./FormTableRow";
import { useFieldState } from "@/hooks/useFieldState";
import { ENUM_EDU_EXP } from "../../../../../enums/candidate";

export default function AddEducation({ setEducation }) {
  const { control } = useFormContext();

  const courseNameRef = useRef(null);
  const institutionRef = useRef(null);
  const timePeriodRef = useRef(null);
  const desciptionRef = useRef(null);

  const { fields, append, remove } = useFieldArray({
    name: "educationTraining",
    control,
  });

  const refs = [courseNameRef, institutionRef, timePeriodRef, desciptionRef];
  const { appendData, customError, onChange, openForm, closeForm, isFormOpen } =
    useFieldState(refs, append);

  return (
    <div className="mt-2">
      {fields.length ? (
        <div className="mb-5">
          <FormTableRow
            fields={fields}
            remove={remove}
            type={ENUM_EDU_EXP.EDU}
          />
        </div>
      ) : null}

      {isFormOpen ? (
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <FormInput
                id="courseName"
                name="courseName"
                label="Course of Study"
                placeholder="E.g. Finance"
                type="text"
                inputRef={courseNameRef}
                handleOnChange={onChange}
                customError={customError}
              />
            </div>
            <div className="col-span-1">
              <FormInput
                type="text"
                id="institution"
                name="institution"
                label="Institution"
                handleOnChange={onChange}
                placeholder="E.g. Oxford University"
                inputRef={institutionRef}
                customError={customError}
              />
            </div>
            <div className="col-span-1">
              <FormInput
                id="timePeriod"
                name="timePeriod"
                label="Time Period"
                handleOnChange={onChange}
                placeholder="E.g. 2007 - 2012"
                type="text"
                inputRef={timePeriodRef}
                customError={customError}
              />
            </div>
          </div>

          <FormTextarea
            rows={6}
            id="details"
            name="details"
            label="Details"
            handleOnChange={onChange}
            placeholder="Type a short details..."
            inputClass="resize-none"
            inputRef={desciptionRef}
            customError={customError}
          />

          <div className="flex gap-5 items-center">
            <button type="button" onClick={appendData} className="btn_accent">
              Add
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="font-semibold text-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={openForm} className="btn_accent">
          Add Education
        </button>
      )}
    </div>
  );
}
