import "./module.style.css";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useState } from "react";
import { industries, location } from "@/constants/jobInfo";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import FormSelect from "@/components/form/FormSelect";
import FormImg from "@/components/form/FormImg";
import Form from "@/components/form/Form";
import AddSkill from "./components/AddSkill";
import AddExperience from "./components/AddExperience";
import AddEducation from "./components/AddEducation";
import { yupResolver } from "@hookform/resolvers/yup";
import { candidateProfileSchema } from "@/schema/candidateProfile";
import AddResume from "./components/AddResume";
import ButtonPrimary from "../../../../components/ui/ButtonPrimary";
import { catchAsync } from "../../../../helpers/catchAsync";
import { useEditProfileMutation } from "../../../../redux/api/candidate";
import toast from "react-hot-toast";
import { useMeQuery } from "../../../../redux/api/user";

export default function CandidateEditProfile() {
  const [skills, setSkills] = useState([]);

  const { data, isLoading: meLoading } = useMeQuery();
  const [editProfile, { isLoading }] = useEditProfileMutation();

  const onSubmit = catchAsync(async (data) => {
    console.log(data);
    const res = await editProfile(data).unwrap();
    toast.success(res?.message);
  });

  let defaultValues = data?.data;

  return (
    <div>
      <DashboardHeader
        title="Edit Profile"
        subtitle="Edit your candidate profile page info."
      />

      <div className="">
        <Form
          defaultValues={defaultValues}
          submitHandler={onSubmit}
          resolver={yupResolver(candidateProfileSchema)}
        >
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <FormInput
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
                mandatory={true}
              />
              <div className="flex gap-5">
                <FormInput
                  name="email"
                  label="Email"
                  placeholder="Your Email"
                  type="email"
                  divClass=" w-1/2 flex-grow"
                  disabled
                />
                <FormInput
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Your Phone"
                  type="number"
                  mandatory={true}
                  divClass=" w-1/2 flex-grow"
                />
              </div>
              <FormInput
                name="title"
                label="Title"
                placeholder="Your Title"
                type="text"
                mandatory={true}
              />
              <FormTextarea
                rows={6}
                name="about"
                label="About"
                placeholder="Bio"
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
              />

              <FormImg
                label="Upload Image"
                id="avatar"
                name="avatar"
                height="h-32"
                width="w-32"
              />
            </div>
          </div>

          <div className="flex gap-5 mb-8">
            <FormSelect
              options={industries}
              name="industry"
              label="Industry"
              mandatory={true}
              placeholder="Select Industry"
              divClass="w-1/2 flex-grow"
            />
            <FormSelect
              options={location}
              name="location"
              label="Location"
              placeholder="Select Location"
              mandatory={true}
              divClass="w-1/2 flex-grow"
            />
          </div>

          <div className="mt-12">
            <h2 className="heading_2">Skills</h2>
            <AddSkill skills={skills} setSkills={setSkills} />
          </div>

          <div className="mt-12">
            <h2 className="heading_2">Work Experience</h2>
            <AddExperience />
          </div>

          <div className="mt-12">
            <h2 className="heading_2">Education & Training</h2>
            <AddEducation />
          </div>

          <div className="mt-12">
            <h2 className="heading_2">Resume</h2>
            <AddResume resumeData={data?.data?.resume} meLoading={meLoading} />
          </div>

          <div className="mt-12">
            <ButtonPrimary
              className="btn_secondary"
              display="Update Profile"
              isLoading={isLoading}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
