import toast from "react-hot-toast";

export const catchAsync =
  (fn) =>
  async (arg, ...rest) => {
    try {
      await fn(arg, ...rest);
    } catch (error) {
      if (error?.data?.message === "Validation Error")
        toast.error(error.data?.errorMessages[0]?.message, { id: "err" });
      else
        toast.error(error?.data?.message || "Something went wrong", {
          id: "err",
        });
    }
  };
