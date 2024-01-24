import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Form({
  children,
  submitHandler,
  defaultValues,
  resolver,
  className,
}) {
  const formConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    submitHandler(data);
    // reset();
    // When clicking on submit button default values are not being removed
  };

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
