import toast from "react-hot-toast";

export const catchAsync = (fn) => async (arg) => {
  try {
    await fn(arg);
  } catch (error) {
    console.log(error);
    if (error?.data?.message === "Validation Error")
      toast.error(error.data?.errorMessages[0]?.message);
    else 
      toast.error(error?.data?.message || "Something went wrong");
  }
};
