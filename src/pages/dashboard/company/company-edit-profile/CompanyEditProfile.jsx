import FormSelect from "@/components/form/FormSelect";
import FormImg2 from "@/components/form/FormImg2";
import FormTextarea from "@/components/form/FormTextarea";
import FormInput from "@/components/form/FormInput";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { industries, location } from "@/constants/jobInfo";
import FormCheckbox from "@/components/form/FormCheckbox";
import Form from "@/components/form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { companyProfileSchema } from "@/schema/companyProfile";
import { catchAsync } from "@/helpers/catchAsync";
import { useEditCompanyProfileMutation } from "@/redux/api/company";
import { useMeQuery } from "@/redux/api/user";
import toast from "react-hot-toast";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

export default function CompanyEditProfile() {
  const { data } = useMeQuery();
  const [updateProfile, { isLoading }] = useEditCompanyProfileMutation();

  const onSubmit = catchAsync(async (data) => {
    const res = await updateProfile(data).unwrap();
    toast.success(res?.message);
  });

  const defaultValues = data?.data;

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
          resolver={yupResolver(companyProfileSchema)}
        >
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <FormInput
                name="name"
                label="Company Name"
                placeholder="Add Company Name"
                type="text"
                mandatory={true}
              />
              <div className="flex gap-5">
                <FormInput
                  name="email"
                  label="Email"
                  placeholder="company@gmail.com"
                  type="email"
                  mandatory={true}
                  disabled
                  divClass=" w-1/2 flex-grow"
                />
                <FormInput
                  name="phoneNumber"
                  label="Phone"
                  placeholder="(+880) 1703790978"
                  type="text"
                  mandatory={true}
                  divClass=" w-1/2 flex-grow"
                />
              </div>
              <FormInput
                name="website"
                label="Website"
                placeholder="https://"
                type="text"
                mandatory={true}
              />
              <FormTextarea
                rows={6}
                name="about"
                label="About"
                placeholder="About Company"
                mandatory={true}
                inputClass="resize-none"
              />
            </div>

            <div className="col-span-4">
              <FormImg2
                label="Upload cover photo"
                id="banner"
                name="banner"
                height="h-40"
                width="w-full"
              />

              <FormImg2
                label="Upload Image"
                id="logo"
                name="logo"
                height="h-32"
                width="w-32"
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
              name="founded"
              label="Found In"
              placeholder="E.g. 2001"
              type="text"
              mandatory={true}
              divClass="col-span-3"
            />
            <FormInput
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
                name="socialLinks.facebook"
                label="Facebook"
                placeholder="https://"
                type="text"
                divClass="col-span-1"
              />
              <FormInput
                name="socialLinks.twitter"
                label="Twitter"
                placeholder="https://"
                type="text"
                divClass="col-span-1"
              />
              <FormInput
                name="socialLinks.instagram"
                label="Instagram"
                placeholder="https://"
                type="text"
                divClass="col-span-1"
              />
              <FormInput
                name="socialLinks.linkedIn"
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
