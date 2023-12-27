import { useRef, useState } from "react";
import FormInput from "../../../../../components/form/FormInput";
import FormTextarea from "../../../../../components/form/FormTextarea";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormTableRow from "./FormTableRow";

export default function AddExperience() {
  const [openExp, setOpenExp] = useState(false);
  const { control } = useFormContext();
  const [experience, setExperience] = useState({});

  const jobTitleRef = useRef(null);
  const companyNameRef = useRef(null);
  const timePeriodRef = useRef(null);
  const desciptionRef = useRef(null);

  const { fields, append, remove } = useFieldArray({
    name: "experience",
    control,
  });

  const appendData = () => {
    append(experience);
    setExperience({});

    jobTitleRef.current.value = "";
    companyNameRef.current.value = "";
    timePeriodRef.current.value = "";
    desciptionRef.current.value = "";
  };

  const onChange = (data, name) =>
    setExperience({ ...experience, [name]: data });

  return (
    <div className="mt-2">
      {fields.length ? (
        <div className="mb-5">
          <FormTableRow fields={fields} remove={remove} />
        </div>
      ) : null}

      {openExp ? (
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <FormInput
                id="jobTitle"
                name="jobTitle"
                label="Job Title"
                placeholder="E.g. Web Developer"
                handleOnChange={onChange}
                type="text"
                inputRef={jobTitleRef}
              />
            </div>
            <div className="col-span-1">
              <FormInput
                id="companyName"
                name="companyName"
                label="Company Name"
                placeholder="E.g. Apple"
                handleOnChange={onChange}
                type="text"
                inputRef={companyNameRef}
              />
            </div>
            <div className="col-span-1">
              <FormInput
                id="timePeriod"
                name="timePeriod"
                label="Time Period"
                placeholder="E.g. 2007 - 2012"
                handleOnChange={onChange}
                type="text"
                inputRef={timePeriodRef}
              />
            </div>
          </div>

          <FormTextarea
            rows={6}
            id="description"
            name="description"
            label="Description"
            placeholder="Type a short description..."
            handleOnChange={onChange}
            inputClass="resize-none"
            inputRef={desciptionRef}
          />

          <div className="flex gap-5 items-center">
            <button type="button" onClick={appendData} className="btn_accent">
              Add
            </button>
            <button
              onClick={() => setOpenExp(false)}
              className="font-semibold text-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpenExp(true)}
          className="btn_accent"
        >
          Add Experience
        </button>
      )}
    </div>
  );
}
