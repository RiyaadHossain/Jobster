import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import FormSelect from "@/components/form/FormSelect";
import Form from "@/components/form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { jobOfferSchema } from "@/schema/jobOffer";
import {
  employmentTypeOpt,
  expLevelOpt,
  industries,
  location,
} from "@/constants/jobInfo";
import AddResponsiblity from "./components/AddResponsiblity";
import AddRequirement from "./components/AddRequirements";
import { catchAsync } from "@/helpers/catchAsync";
import { usePostJobMutation } from "@/redux/api/jobApi";
import ButtonPrimary from "../../../../components/ui/ButtonPrimary";
import toast from "react-hot-toast";
import AddSkill from "./components/AddSkill";
import { useNavigate } from "react-router-dom";
import { selectTab } from "../../../../redux/slices/sidebarItemSlice";
import { ENUM_SIDEBAR_ITEM } from "../../../../enums/sidebarItems";
import { useDispatch } from "react-redux";

export default function NewJobOffers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createJob, { isLoading }] = usePostJobMutation();

  const onSubmit = catchAsync(async (data) => {
    const res = await createJob(data).unwrap();
    toast.success(res?.message);

    navigate("/dashboard/company/manage-jobs");
    dispatch(selectTab(ENUM_SIDEBAR_ITEM.COMP_MANAGE_JOBS));
  });

  return (
    <div>
      <DashboardHeader
        title="New Job Offer"
        subtitle="Add a new job to your company's jobs list."
      />

      <div className="">
        <Form submitHandler={onSubmit} resolver={yupResolver(jobOfferSchema)}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <FormInput
                name="title"
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
                  name="location"
                  placeholder="Select Location"
                  mandatory={true}
                  divClass=" w-1/2 flex-grow"
                />
              </div>
              <FormTextarea
                rows={6}
                name="description"
                label="Job Description"
                placeholder="Write Job Details"
                mandatory={true}
                inputClass="resize-none"
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
              placeholder="Select Employment Type"
            />
            <FormSelect
              options={expLevelOpt}
              label="Experience Level"
              name="workLevel"
              mandatory={true}
              divClass="col-span-3"
              placeholder="Select Experience Level"
            />
            <FormInput
              name="experience"
              label="Required Experience"
              placeholder="E.g. Minimum 1 year"
              type="text"
              mandatory={true}
              divClass="col-span-3"
            />
            <FormInput
              name="salaryRange"
              label="Salary"
              placeholder="E.g. $100 / year"
              type="text"
              mandatory={true}
              divClass="col-span-3"
            />
          </div>

          <div className="mt-12">
            <h2 className="heading_2">Skill</h2>
            <AddSkill />
          </div>

          <div className="mt-12">
            <h2 className="heading_2">Responsiblity</h2>
            <AddResponsiblity />
          </div>

          <div className="mt-12">
            <h2 className="heading_2">Requirements</h2>
            <AddRequirement />
          </div>

          <div className="mt-10">
            <ButtonPrimary
              className="btn_secondary"
              isLoading={isLoading}
              display="Publish Job"
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
