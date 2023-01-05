import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAnsQuestionMutation, useAskQuestionMutation, useGetJobByIdQuery } from "../features/job/jobSlice";
import meeting from "../assets/meeting.jpg"
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Loading from "../components/reusable/Loading";

const JobDetails = () => {
  const { id } = useParams()
  const [replyOne, setReply] = useState("")
  const { register, handleSubmit, reset } = useForm()
  const { handleSubmit: replyHandleSubmit } = useForm()
  const { isError, isFetching, data, error, isSuccess } = useGetJobByIdQuery(id,/*  {pollingInterval: '1000'} */)
  const { user: { email, role, _id: userId } } = useSelector(state => state.auth)
  const [askQuestion, { isSuccess: askQuestionSuccess }] = useAskQuestionMutation()
  const [ansQuestion, { isSuccess: ansQuestionSuccess }] = useAnsQuestionMutation()

  useEffect(() => {
    if (isSuccess) {

    }
    if (isError) {

    }
  }, [isFetching, isSuccess, isError, error, data])

  if (isFetching) return <Loading />

  if (askQuestionSuccess) toast.success("Successfully posted your query", { id: 'ask' })

  if (ansQuestionSuccess) toast.success("Successfully posted your reply", { id: 'ans' })

  const {
    companyName,
    position,
    location,
    experience,
    workLevel,
    employmentType,
    salaryRange,
    skills,
    requirements,
    responsibilities,
    overview,
    queries
  } = data?.data || {};

  const onReply = (replyData) => {
    const { reply } = replyData
    if(reply === '') return toast.error("Can't save empty text", {id: 'emt'})
    ansQuestion(replyData)
    setReply("")
  }

  const onQuest = (formData) => {
    const data = { ...formData, userId, email: email, jobId: id }
    askQuestion(data)
    reset()
  }

  return (
    <div className='pt-14 grid grid-cols-12 gap-5'>
      <div className='col-span-9 mb-10'>
        <div className='h-80 rounded-xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={meeting} alt='' />
        </div>
        <div className='space-y-5'>
          <div className='flex justify-between items-center mt-5'>
            <h1 className='text-xl font-semibold text-primary'>{position}</h1>
            {role === 'candidate' && <button className='btn'>Apply</button>}
          </div>
          <div>
            <h1 className='text-primary text-lg font-medium mb-3'>Overview</h1>
            <p>{overview}</p>
          </div>
          <div>
            <h1 className='text-primary text-lg font-medium mb-3'>Skills</h1>
            <ul>
              {skills.map((skill, i) => (
                <li key={i} className='flex items-center'>
                  <BsArrowRightShort /> <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className='text-primary text-lg font-medium mb-3'>
              Requirements
            </h1>
            <ul>
              {requirements.map((skill, i) => (
                <li key={i} className='flex items-center'>
                  <BsArrowRightShort /> <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className='text-primary text-lg font-medium mb-3'>
              Responsibilities
            </h1>
            <ul>
              {responsibilities.map((skill, i) => (
                <li key={i} className='flex items-center'>
                  <BsArrowRightShort /> <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className='my-5' />

        {(queries.length || role === 'candidate') && <div>
          <div>
            <h1 className='text-xl font-semibold text-primary mb-5'>
              General Q&A
            </h1>
            <div className='text-primary my-2'>
              {queries?.map(({ question, email, reply, id }, i) => (
                <div key={i}>
                  <small>{email}</small>
                  <p className='text-lg font-medium'>{question}</p>
                  {reply?.map((item, i) => (
                    <p key={i} className='flex items-center gap-2 relative left-5'>
                      <BsArrowReturnRight /> {item}
                    </p>
                  ))}

                  {role === 'employee' && (<form onSubmit={replyHandleSubmit(() =>onReply({reply: replyOne, userId: id}))}>
                    <div className='flex gap-3 my-5'>
                      <input placeholder='Reply' type='text' className='w-full' onBlur={e => setReply(e.target.value)} />
                      <button
                        className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
                        type='submit'
                      >
                        <BsArrowRightShort size={30} />
                      </button>
                    </div>
                  </form>)}
                </div>
              ))}
            </div>
            {role === 'candidate' && <form onSubmit={handleSubmit(onQuest)}>
              <div className='flex gap-3 my-5'>
                <input
                  placeholder='Ask a question...'
                  type='text'
                  className='w-full'
                  {...register("question")}
                />
                <button
                  className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
                  type='submit'
                >
                  <BsArrowRightShort size={30} />
                </button>
              </div>
            </form>}
          </div>
        </div>}
      </div>
      <div className='col-span-3'>
        <div className='rounded-xl bg-primary/10 p-5 text-primary space-y-5'>
          <div>
            <p>Experience</p>
            <h1 className='font-semibold text-lg'>{experience}</h1>
          </div>
          <div>
            <p>Work Level</p>
            <h1 className='font-semibold text-lg'>{workLevel}</h1>
          </div>
          <div>
            <p>Employment Type</p>
            <h1 className='font-semibold text-lg'>{employmentType}</h1>
          </div>
          <div>
            <p>Salary Range</p>
            <h1 className='font-semibold text-lg'>{salaryRange}</h1>
          </div>
          <div>
            <p>Location</p>
            <h1 className='font-semibold text-lg'>{location}</h1>
          </div>
        </div>
        <div className='mt-5 rounded-xl bg-primary/10 p-5 text-primary space-y-5'>
          <div>
            <h1 className='font-semibold text-lg'>{companyName}</h1>
          </div>
          <div>
            <p>Company Size</p>
            <h1 className='font-semibold text-lg'>Above 100</h1>
          </div>
          <div>
            <p>Founded</p>
            <h1 className='font-semibold text-lg'>2001</h1>
          </div>
          <div>
            <p>Email</p>
            <h1 className='font-semibold text-lg'>company.email@name.com</h1>
          </div>
          <div>
            <p>Company Location</p>
            <h1 className='font-semibold text-lg'>Los Angeles</h1>
          </div>
          <div>
            <p>Website</p>
            <a className='font-semibold text-lg' href='#d'>
              https://website.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
