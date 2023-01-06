import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../features/auth/authAPI";

const CandidateRegistration = () => {

  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const { user: { email } } = useSelector(state => state.auth)
  const { handleSubmit, register, control, reset } = useForm({ defaultValues: { email } });
  const term = useWatch({ control, name: "term" });
  const [registerCandidate, { isError, isLoading, isSuccess, data, error }] = useRegistrationMutation()

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    if (isLoading) {
      toast.loading("Processing...", {id: 'pending', duration: 2000})
    }
    if (isSuccess) {
      toast.success("Successfully Register your account", {id: 'success'})
    }
    if (isError) {
      toast.error("Failed to Register your account", {id: 'fail'})
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
          <hr className='w-full mt-2 bg-black' />
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
            <label className='mb-2' htmlFor='address'>
              Street Address
            </label>
            <input type='text' {...register("address")} id='address' />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='city'>
              City
            </label>
            <input type='text' {...register("city")} id='city' />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='postcode'>
              Postal Code
            </label>
            <input type='text' {...register("postcode")} id='postcode' />
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
