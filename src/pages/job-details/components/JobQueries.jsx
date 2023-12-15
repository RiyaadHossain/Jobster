import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsArrowReturnRight, BsArrowRightShort } from "react-icons/bs";
import {
  useAnsQuestionMutation,
  useAskQuestionMutation,
} from "../../../features/job/jobAPI";
import { useSelector } from "react-redux";

export default function JobQueries({ queries, jobId }) {
  const [replyOne, setReply] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const { handleSubmit: replyHandleSubmit } = useForm();

  // Redux Mutation Functions
  const [
    askQuestion,
    { isSuccess: askQuestionSuccess, isError: askError, error: askErr },
  ] = useAskQuestionMutation();

  const [
    ansQuestion,
    { isSuccess: ansQuestionSuccess, isError: ansError, error: ansErr },
  ] = useAnsQuestionMutation();

  const {
    user: { email, role, _id: userId },
  } = useSelector((state) => state.auth);

  // Showing Toast Message____________
  if (askError) toast.error(askErr, { id: "askErr" });

  if (ansError) toast.error(ansErr, { id: "ansErr" });

  if (askQuestionSuccess)
    toast.success("Successfully posted your query", { id: "ask" });

  if (ansQuestionSuccess)
    toast.success("Successfully posted your reply", { id: "ans" });

  // On Click Event____________
  const onReply = (replyData) => {
    const { reply } = replyData;
    if (reply === "")
      return toast.error("Can't save empty text", { id: "emt" });
    ansQuestion(replyData);
    setReply("");
  };

  const onQuest = (formData) => {
    const data = { ...formData, userId, email: email, jobId };
    askQuestion(data);
    reset();
  };

  return (
    <>
      {(queries.length || role === "candidate") && (
        <div>
          <div>
            <h1 className="text-xl font-semibold text-primary mb-5">
              General Q&A
            </h1>
            <div className="text-primary my-2">
              {queries?.map(({ question, email, reply, id }, i) => (
                <div key={i}>
                  <small>{email}</small>
                  <p className="text-lg font-medium">{question}</p>
                  {reply?.map((item, i) => (
                    <p
                      key={i}
                      className="flex items-center gap-2 relative left-5"
                    >
                      <BsArrowReturnRight /> {item}
                    </p>
                  ))}

                  {role === "employee" && (
                    <form
                      onSubmit={replyHandleSubmit(() =>
                        onReply({ reply: replyOne, userId: id })
                      )}
                    >
                      <div className="flex gap-3 my-5">
                        <input
                          placeholder="Reply"
                          type="text"
                          className="w-full"
                          onBlur={(e) => setReply(e.target.value)}
                        />
                        <button
                          className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white"
                          type="submit"
                        >
                          <BsArrowRightShort size={30} />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ))}
            </div>
            {role === "candidate" && (
              <form onSubmit={handleSubmit(onQuest)}>
                <div className="flex gap-3 my-5">
                  <input
                    placeholder="Ask a question..."
                    type="text"
                    className="w-full"
                    {...register("question")}
                  />
                  <button
                    className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white"
                    type="submit"
                  >
                    <BsArrowRightShort size={30} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
