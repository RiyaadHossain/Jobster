import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Form({
  children,
  submitHandler,
  defaultValues,
  className,
  nestedForm,
}) {
  const formConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    submitHandler(data);
    reset();
    // When clicking on submit button default values are not being removed
  };

  // const onSubmitWithoutPropagation = (e) => {
  //   console.log("we are here")
  //   e.preventDefault();
  //   e.stopPropagation();
  //   handleSubmit(onSubmit)(e);
  //   reset();
  // };

  // const currOnSubmit = !nestedForm ? onSubmit : onSubmitWithoutPropagation;

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
