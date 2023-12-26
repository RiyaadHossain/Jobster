import React, { useState } from "react";
import FormSelect from "../../../../components/form/FormSelect";
import FormImg from "../../../../components/form/FormImg";
import FormTextarea from "../../../../components/form/FormTextarea";
import FormInput from "../../../../components/form/FormInput";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import { industries, location } from "../../../../constants/jobInfo";
import FormCheckbox from "../../../../components/form/FormCheckbox";
import Form from "../../../../components/form/Form";

export default function CompanyEditProfile() {
  const [imgUrl, setImgUrl] = useState({ banner: null, avatar: null });

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DashboardHeader
        title="Edit Profile"
        subtitle="Edit your candidate profile page info."
      />

      <div className="">
        <Form submitHandler={onSubmit}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <FormInput
                id="companyName"
                name="companyName"
                label="Company Name"
                placeholder="Add Company Name"
                type="text"
                mandatory={true}
              />
              <div className="flex gap-5">
                <FormInput
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="company@gmail.com"
                  type="email"
                  mandatory={true}
                  divClass=" w-1/2 flex-grow"
                />
                <FormInput
                  id="phone"
                  name="phone"
                  label="Phone"
                  placeholder="(+880) 1703790978"
                  type="number"
                  mandatory={true}
                  divClass=" w-1/2 flex-grow"
                />
              </div>
              <FormInput
                id="website"
                name="website"
                label="Website"
                placeholder="https://"
                type="text"
                mandatory={true}
              />
              <FormTextarea
                rows={6}
                id="about"
                name="about"
                label="About"
                placeholder="About Company"
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

              <FormImg
                label="Upload Image"
                id="avatar"
                name="avatar"
                height="h-32"
                width="w-32"
                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 mb-8">
            <FormSelect
              options={industries}
              name="industry"
              label="Industry"
              mandatory={true}
              placeholder="Select Industry"
              divClass="col-span-3"
            />
            <FormSelect
              options={location}
              name="location"
              label="Location"
              placeholder="Select Location"
              mandatory={true}
              divClass="col-span-3"
            />
            <FormInput
              id="foundIn"
              name="foundIn"
              label="Found In"
              placeholder="E.g. 2001"
              type="text"
              mandatory={true}
              divClass="col-span-3"
            />
            <FormInput
              id="companySize"
              name="companySize"
              label="Company Size"
              placeholder="E.g. 10 - 51"
              type="text"
              mandatory={true}
              divClass="col-span-3"
            />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold leading-7 tracking-tight mb-6">
              Social Media
            </h2>

            <div className="grid grid-cols-2 gap-5">
              <FormInput
                id="facebook"
                name="facebook"
                label="Facebook"
                placeholder="https://"
                type="text"
                divClass="col-span-1"
              />
              <FormInput
                id="twitter"
                name="twitter"
                label="Twitter"
                placeholder="https://"
                type="text"
                divClass="col-span-1"
              />
              <FormInput
                id="instagram"
                name="instagram"
                label="Instagram"
                placeholder="https://"
                type="text"
                divClass="col-span-1"
              />
              <FormInput
                id="linkedIn"
                name="linkedIn"
                label="LinkedIn"
                placeholder="https://"
                type="text"
                divClass="col-span-1"
              />
            </div>
          </div>

          <FormCheckbox
            id="applyNotification"
            name="applyNotification"
            label="Notify the company when a new candidate applies for a job"
            divClass="mt-3"
          />

          <div className="mt-12">
            <button className="btn_secondary">Update Profile</button>
          </div>
        </Form>
      </div>
    </div>
  );
}
