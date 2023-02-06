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
  const { handleSubmit, register, control, reset } = useForm({ defaultValues: { email } });

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
            <input type='text' id='firstName' {...register("firstName")} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='lastName'>
              Last Name
            </label>
            <input type='text' id='lastName' {...register("lastName")} />
          </div>
          <div className='flex  flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='email'>
              Email
            </label>
            <input className="bg-slate-200 cursor-not-allowed" disabled type='email' id='email' {...register("email")} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <h1 className='mb-3'>Gender</h1>
            <div className='flex gap-3'>
              <div>
                <input
                  type='radio'
                  id='male'
                  {...register("gender")}
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
                  {...register("gender")}
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
                  {...register("gender")}
                  value='other'
                />
                <label className='ml-2 text-lg' htmlFor='other'>
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' htmlFor='country'>
              Country
            </label>
            <select {...register("country")} id='country'>
              {countries
                .sort((a, b) => a?.name?.common?.localeCompare(b?.name?.common))
                .map(({ name }, i) => (
                  <option key={i} value={name.common}>{name.common}</option>
                ))}
            </select>
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='city'>
              City
            </label>
            <input type='text' {...register("city")} id='city' />
          </div>

          <hr className='w-full mt-2 bg-black' />
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='candidateType'>
              Experience
            </label>
            <select defaultValue="1 - 2" {...register("candidateType")} id='candidateType' >
              <option defaultChecked value="0 - 1">0 - 1</option>
              <option value="1 - 2">1 - 2</option>
              <option value="2 - 5">2 - 5</option>
              <option value="5 - 10">5 - 10</option>
              <option value="10+">10+</option>
            </select>
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='candidateType'>
              Candidate Type
            </label>
            <select defaultValue="Fresher" {...register("candidateType")} id='candidateType' >
              <option value="Fresher">Fresher</option>
              <option value="Junior">Junior</option>
              <option value="Mid-Senior">Mid-Senior</option>
              <option value="Senior">Senior</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='university'>
              University
            </label>
            <input type='text' {...register("university")} id='university' />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='profession'>
              Profession
            </label>
            <input placeholder="Software Engineer" type='text' {...register("profession")} id='profession' />
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
                        {...register(`education[${index}]`)}
                      />
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
                        {...register(`skills[${index}]`)}
                      />
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
                        {...register(`experience[${index}]`)}
                      />
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
            <textarea className="resize-none" rows={7} {...register("about")} id="about" />
          </div>
          <div className='flex justify-between items-center w-full mt-3'>
            <div className='flex  w-full max-w-xs'>
              <input
                className='mr-3'
                type='checkbox'
                {...register("term")}
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
