import React, { useState } from "react";
import Form from "../../../components/form/Form";
import FormInput from "../../../components/form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../../../schema/resetPassword";
import { catchAsync } from "../../../helpers/catchAsync";
import toast from "react-hot-toast";
import { useResetPasswordMutation } from "../../../redux/api/auth";
import ButtonPrimary from "../../../components/ui/ButtonPrimary";

export default function PasswordResetForm({ token, setPasswordReset }) {
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onSubmit = catchAsync(async (data) => {
    data.token = token;
    const res = await resetPassword(data).unwrap();

    toast.success(res?.message);
    setPasswordReset(true);
  });

  const passwordMatched = newPasswordValue === confirmPasswordValue;

  return (
    <div className="py-16 px-8 rounded-3xl shadow-md col-span-2 md:col-span-1">
      <h1 className="text-2xl font-semibold mb-5">Reset Your Password</h1>
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(resetPasswordSchema)}
      >
        <FormInput
          id="newPassword"
          label="New Password"
          name="newPassword"
          placeholder="New Password"
          type="password"
          mandatory={true}
          setWatch={setNewPasswordValue}
        />
        <FormInput
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          mandatory={true}
          setWatch={setConfirmPasswordValue}
        />
        <ButtonPrimary
          className="btn_secondary w-full"
          display="Reset Password"
          isLoading={isLoading}
          disabled={!passwordMatched}
        />
        {!passwordMatched && (
          <p className="text-red-600 text-sm text-center mt-1">
            Password didn't match
          </p>
        )}
      </Form>
    </div>
  );
}
