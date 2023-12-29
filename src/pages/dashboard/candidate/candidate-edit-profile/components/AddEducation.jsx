import { useRef } from "react";
import FormInput from "../../../../../components/form/FormInput";
import FormTextarea from "../../../../../components/form/FormTextarea";
import { useFieldArray, useFormContext } from "react-hook-form";
import EducationRow from "./FormTableRow";
import { useFieldState } from "../../../../../hooks/useFieldState";

export default function AddEducation() {
  const { control } = useFormContext();

  const courseOfStudyRef = useRef(null);
  const institutionRef = useRef(null);
  const timePeriodRef = useRef(null);
  const desciptionRef = useRef(null);

  const { fields, append, remove } = useFieldArray({
    name: "educationTraining",
    control,
  });

  const { appendData, customError, onChange, openForm, closeForm, isFormOpen } =
    useFieldState({
      append,
      refs: [courseOfStudyRef, institutionRef, timePeriodRef, desciptionRef],
    });

  return (
    <div className="mt-2">
      {fields.length ? (
        <div className="mb-5">
          <EducationRow fields={fields} remove={remove} />
        </div>
      ) : null}

      {isFormOpen ? (
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <FormInput
                id="courseOfStudy"
                name="courseOfStudy"
                label="Course of Study"
                placeholder="E.g. Finance"
                type="text"
                inputRef={courseOfStudyRef}
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
            id="description"
            name="description"
            label="Description"
            handleOnChange={onChange}
            placeholder="Type a short description..."
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
