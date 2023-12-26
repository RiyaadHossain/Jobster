import React, { useState } from "react";
import DashboardHeader from "../../../../../components/dashboard/DashboardHeader";
import FormInput from "../../../../../components/form/FormInput";
import FormSelect from "../../../../../components/form/FormSelect";
import {
  employmentTypeOpt,
  expLevelOpt,
  industries,
  location,
} from "../../../../../constants/jobInfo";
import FormTextarea from "../../../../../components/form/FormTextarea";
import FormImg from "../../../../../components/form/FormImg";
import Form from "../../../../../components/form/Form";

export default function EditJobOffer() {
  const [imgUrl, setImgUrl] = useState({ banner: null, avatar: null });

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {}

  return (
    <div>
      <DashboardHeader
        title="New Job Offer"
        subtitle="Add a new job to your company's jobs list."
      />

      <div className="">
        <Form defaultValues={defaultValues} submitHandler={onSubmit}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <FormInput
                id="jobTitle"
                name="jobTitle"
                label="Job Title"
                placeholder="Add Job Title"
                type="text"
                mandatory={true}
              />
              <div className="flex gap-5">
                <FormSelect
                  options={industries}
                  label="Industry"
                  name="industry"
                  mandatory={true}
                  placeholder="Select Industry"
                  divClass=" w-1/2 flex-grow"
                />
                <FormSelect
                  options={location}
                  label="Location"
                  name="Location"
                  placeholder="Select Location"
                  mandatory={true}
                  divClass=" w-1/2 flex-grow"
                />
              </div>
              <FormTextarea
                rows={6}
                id="jobDescription"
                name="jobDescription"
                label="Job Description"
                placeholder="Write Job Details"
                mandatory={true}
                inputClass="resize-none"
              />
            </div>

            <div className="col-span-4">
              <FormImg
                label="Upload cover photo"
                id="banner"
                name="banner"
                height="h-40"
                width="w-full"
                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 mb-8 mt-2">
            <FormSelect
              options={employmentTypeOpt}
              name="employmentType"
              label="Type of Employment"
              mandatory={true}
              divClass="col-span-3"
            />
            <FormSelect
              options={expLevelOpt}
              label="Experience Level"
              mandatory={true}
              divClass="col-span-3"
            />
            <FormInput
              id="requiredExperience"
              name="requiredExperience"
              label="Required Experience"
              placeholder="E.g. Minimum 1 year"
              type="text"
              mandatory={true}
              divClass="col-span-3"
            />
            <FormInput
              id="salary"
              name="salary"
              label="Salary"
              placeholder="E.g. $100 / year"
              type="text"
              mandatory={true}
              divClass="col-span-3"
            />
          </div>

          <div className="mt-10">
            <button className="btn_secondary">Update Job</button>
          </div>
        </Form>
      </div>
    </div>
  );
}
