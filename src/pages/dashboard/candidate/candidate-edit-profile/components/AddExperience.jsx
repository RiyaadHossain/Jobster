import { useEffect, useRef } from "react";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormTableRow from "./FormTableRow";
import { useFieldState } from "@/hooks/useFieldState";

export default function AddExperience({ setExperience }) {
  const { control } = useFormContext();

  const positionRef = useRef(null);
  const companyRef = useRef(null);
  const timePeriodRef = useRef(null);
  const desciptionRef = useRef(null);

  const { fields, append, remove } = useFieldArray({
    name: "workExperience",
    control,
  });

  useEffect(() => {
    setExperience(fields);
  }, [fields, setExperience]);

  const refs = [positionRef, companyRef, timePeriodRef, desciptionRef];
  const { appendData, customError, onChange, isFormOpen, openForm, closeForm } =
    useFieldState(refs, append);

  return (
    <div className="mt-2">
      {fields.length ? (
        <div className="mb-5">
          <FormTableRow fields={fields} remove={remove} />
        </div>
      ) : null}

      {isFormOpen ? (
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <FormInput
                mandatory
                id="position"
                name="position"
                label="Job Title"
                placeholder="E.g. Web Developer"
                handleOnChange={onChange}
                type="text"
                inputRef={positionRef}
                customError={customError}
              />
            </div>
            <div className="col-span-1">
              <FormInput
                mandatory
                id="company"
                name="company"
                label="Company Name"
                placeholder="E.g. Apple"
                handleOnChange={onChange}
                type="text"
                inputRef={companyRef}
                customError={customError}
              />
            </div>
            <div className="col-span-1">
              <FormInput
                mandatory
                id="timePeriod"
                name="timePeriod"
                label="Time Period"
                placeholder="E.g. 2007 - 2012"
                handleOnChange={onChange}
                type="text"
                inputRef={timePeriodRef}
                customError={customError}
              />
            </div>
          </div>

          <FormTextarea
            mandatory
            rows={6}
            id="details"
            name="details"
            label="Details"
            placeholder="Type a short details..."
            handleOnChange={onChange}
            inputClass="resize-none"
            inputRef={desciptionRef}
            customError={customError}
          />

          <div className="flex gap-5 items-center">
            <button type="button" onClick={appendData} className="btn_accent">
              Add
            </button>
            <button onClick={closeForm} className="font-semibold text-primary">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={openForm} className="btn_accent">
          Add Experience
        </button>
      )}
    </div>
  );
}
