import "./module.style.css";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import { useState } from "react";
import { industries, location } from "../../../../constants/jobInfo";
import FormInput from "../../../../components/form/FormInput";
import FormTextarea from "../../../../components/form/FormTextarea";
import FormSelect from "../../../../components/form/FormSelect";
import FormImg from "../../../../components/form/FormImg";
import Form from "../../../../components/form/Form";
import AddSkill from "./components/AddSkill";
import AddExperience from "./components/AddExperience";
import AddEducation from "./components/AddEducation";

export default function CandidateEditProfile() {
  const [imgUrl, setImgUrl] = useState({ banner: null, avatar: null });
  const [skills, setSkills] = useState([]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Add skills data as well
      setSkills([])
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
        <Form  submitHandler={onSubmit}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <FormInput
                id="name"
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
                mandatory={true}
              />
              <div className="flex gap-5">
                <FormInput
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="Your Email"
                  type="email"
                  mandatory={true}
                  divClass=" w-1/2 flex-grow"
                />
                <FormInput
                  id="phone"
                  name="phone"
                  label="Phone"
                  placeholder="Your Phone"
                  type="number"
                  mandatory={true}
                  divClass=" w-1/2 flex-grow"
                />
              </div>
              <FormInput
                id="title"
                name="title"
                label="Title"
                placeholder="Your Title"
                type="text"
                mandatory={true}
              />
              <FormTextarea
                rows={6}
                id="about"
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
            <h2 className="text-2xl font-semibold leading-7 tracking-tight mb-6">
              Skills
            </h2>

            <AddSkill skills={skills} setSkills={setSkills} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold leading-7 tracking-tight mb-6">
              Work Experience
            </h2>

            <AddExperience />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold leading-7 tracking-tight mb-6">
              Education & Training
            </h2>

            <AddEducation />
          </div>

          <div className="mt-12">
            <button className="btn_secondary">Update Profile</button>
          </div>
        </Form>
      </div>
    </div>
  );
}
