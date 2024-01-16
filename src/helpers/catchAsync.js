import toast from "react-hot-toast";

export const catchAsync = (fn) => async (arg) => {
  try {
    await fn(arg);
  } catch (error) {
    toast.error(error?.data?.message || "Something went wrong");
  }
};
