import React, { useEffect, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaChevronLeft } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../features/auth/authAPI";

const CandidateRegistration = () => {

  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const { user: { email } } = useSelector(state => state.auth)
  const { handleSubmit, register, control, reset, formState: { errors } } = useForm({ defaultValues: { email } });

  const {
    fields: eduFields,
    append: eduAppend,
    remove: eduRemove,
  } = useFieldArray({ control, name: "education" });
  const {
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({ control, name: "skills" });
  const {
    fields: expFields,
    append: expAppend,
    remove: expRemove,
  } = useFieldArray({ control, name: "experience" });
  const term = useWatch({ control, name: "term" });
  const [registerCandidate, { isError, isLoading, isSuccess, data, error }] = useRegistrationMutation()

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    if (isLoading) {
      toast.loading("Processing...", { id: 'pending', duration: 2000 })
    }
    if (isSuccess) {
      toast.success("Successfully Register your account", { id: 'success' })
    }
    if (isError) {
      toast.error("Failed to Register your account", { id: 'fail' })
    }
  }, [isLoading, isSuccess, isError, error, data])

  const onSubmit = (data) => {
    registerCandidate({ ...data, role: "candidate" })
    navigate("/jobs")
    reset()
  };

  return (
    <div className='pt-14'>
      <div
        onClick={() => navigate("/register")}
        className='cursor-pointer w-fit mt-5 flex items-center'
      >
        <FaChevronLeft />
        <p>back</p>
      </div>
      <div className='flex justify-center items-center overflow-auto p-10'>
        <form
          className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className='w-full text-2xl text-primary mb-5'>Candidate</h1>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='firstName'>
              First Name
            </label>
            <input type='text' id='firstName' {...register("firstName", { required: true })} />
            {errors.firstName && <span className="field-error">First Name is Required</span>}
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='lastName'>
              Last Name
            </label>
            <input type='text' id='lastName' {...register("lastName", { required: true })} />
            {errors.lastName && <span className="field-error">Last Name is Required</span>}
          </div>
          <div className='flex  flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='email'>
              Email
            </label>
            <input className="bg-slate-200 cursor-not-allowed" disabled type='email' id='email' {...register("email", { required: true })} />
            {errors.email && <span className="field-error">Email is Required</span>}
          </div>
          <div className='flex  flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='img'>
              Image URL
            </label>
            <input className="" type='text' id='img' {...register("img", { required: true })} />
            {errors.img && <span className="field-error">Image URL is Required</span>}
          </div>

          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' htmlFor='country'>
              Country
            </label>
            <select {...register("country", { required: true })} id='country'>
              {countries
                .sort((a, b) => a?.name?.common?.localeCompare(b?.name?.common))
                .map(({ name }, i) => (
                  <option key={i} value={name.common}>{name.common}</option>
                ))}
            </select>
            {errors.country && <span className="field-error">Country is Required</span>}
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='city'>
              City
            </label>
            <input type='text' {...register("city", { required: true })} id='city' />
            {errors.city && <span className="field-error">City is Required</span>}
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <h1 className='mb-3'>Gender</h1>
            <div className='flex gap-3'>
              <div>
                <input
                  type='radio'
                  id='male'
                  {...register("gender", { required: true })}
                  value='male'
                />
                <label className='ml-2 text-lg' htmlFor='male'>
                  Male
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  id='female'
                  {...register("gender", { required: true })}
                  value='female'
                />
                <label className='ml-2 text-lg' htmlFor='female'>
                  Female
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  id='other'
                  {...register("gender", { required: true })}
                  value='other'
                />
                <label className='ml-2 text-lg' htmlFor='other'>
                  Other
                </label>
              </div>
            </div>
          </div>
          <hr className='w-full mt-2 bg-black' />
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='experienceYear'>
              Experience
            </label>
            <select defaultValue="1 - 2" {...register("experienceYear", { required: true })} id='experienceYear' >
              <option defaultChecked value="0 - 1">0 - 1</option>
              <option value="1 - 2">1 - 2</option>
              <option value="2 - 5">2 - 5</option>
              <option value="5 - 10">5 - 10</option>
              <option value="10+">10+</option>
            </select>
            {errors.experienceYear && <span className="field-error">Experience is Required</span>}
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='candidateType'>
              Candidate Type
            </label>
            <select defaultValue="Fresher" {...register("candidateType", { required: true })} id='candidateType' >
              <option value="Fresher">Fresher</option>
              <option value="Junior">Junior</option>
              <option value="Mid-Senior">Mid-Senior</option>
              <option value="Senior">Senior</option>
              <option value="Expert">Expert</option>
            </select>
            {errors.candidateType && <span className="field-error">This field is Required</span>}
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='university'>
              University
            </label>
            <input type='text' {...register("university", { required: true })} id='university' />
            {errors.university && <span className="field-error">University Name is Required</span>}
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='profession'>
              Profession
            </label>
            <input placeholder="Software Engineer" type='text' {...register("profession", { required: true })} id='profession' />
            {errors.profession && <span className="field-error">Profession is Required</span>}
          </div>
          <hr className='w-full mt-2 bg-black' />
          <div className="flex flex-col w-full">
            <label className="mb-2">Education</label>
            <div>
              <div>
                {eduFields.map((item, index) => {
                  return (
                    <div key={index} className=" mb-5 flex items-center gap-3">
                      <input
                        placeholder="BBA, Oxford University, 2021"
                        className="!w-full"
                        type="text"
                        {...register(`education[${index}]`, { required: true })}
                      />
                      {errors.education && <span className="field-error">Skill is Required</span>}
                      <button
                        type="button"
                        onClick={() => eduRemove(index)}
                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                      >
                        <FiTrash
                          className="text-red-500 group-hover:text-white transition-all"
                          size="20"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => eduAppend("")}
                  className="btn"
                >
                  Add Education
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2">Skills</label>
            <div>
              <div>
                {skillFields.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center gap-3 mb-5">
                      <input
                        className="!w-full"
                        type="text"
                        {...register(`skills[${index}]`, { required: true })}
                      />
                      {errors.skills && <span className="field-error">Skill is Required</span>}
                      <button
                        type="button"
                        onClick={() => skillRemove(index)}
                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                      >
                        <FiTrash
                          className="text-red-500 group-hover:text-white transition-all"
                          size="20"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => skillAppend("")}
                  className="btn"
                >
                  Add Skill
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2">Experience</label>
            <div>
              <div>
                {expFields.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center gap-3 mb-5">
                      <input
                        placeholder="Junior Software Engineer at Google for 2 Years"
                        className="!w-full"
                        type="text"
                        {...register(`experience[${index}]`, { required: true })}
                      />
                      {errors.experience && <span className="field-error"></span>}
                      <button
                        type="button"
                        onClick={() => expRemove(index)}
                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                      >
                        <FiTrash
                          className="text-red-500 group-hover:text-white transition-all"
                          size="20"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => expAppend("")}
                  className="btn"
                >
                  Add Skill
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="about">
              About
            </label>
            <textarea className="resize-none" rows={7} {...register("about", { required: true })} id="about" />
            {errors.email && <span className="field-error"></span>}
          </div>

          <hr className='w-full mt-2 bg-black' />
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='resumeLink'>
              Resume Link
            </label>
            <input type='text' {...register("resumeLink", { required: true })} id='resumeLink' />
            {errors.resumeLink && <span className="field-error">Resume Link is Required</span>}
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='linkedin'>
              Linkedin
            </label>
            <input type='text' {...register("linkedin", { required: true })} id='linkedin' />
            {errors.linkedin && <span className="field-error">Linkedin is Required</span>}
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='github'>
              GitHub
            </label>
            <input type='text' {...register("github", { required: true })} id='github' />
            {errors.github && <span className="field-error">GitHub is Required</span>}
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='portfolio'>
              Portfolio
            </label>
            <input type='text' {...register("portfolio", { required: true })} id='portfolio' />
            {errors.portfolio && <span className="field-error">Portfolio is Required</span>}
          </div>
          <div className='flex justify-between items-center w-full mt-3'>
            <div className='flex  w-full max-w-xs'>
              <input
                className='mr-3'
                type='checkbox'
                {...register("term", { required: true })}
                id='terms'
              />
              <label htmlFor='terms'>I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateRegistration;
