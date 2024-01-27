import React, { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FormInput from "@/components/form/FormInput";
import Form from "@/components/form/Form";
import { useChangePasswordMutation } from "@/redux/api/auth";
import { catchAsync } from "@/helpers/catchAsync";
import toast from "react-hot-toast";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "@/schema/changePassword";

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const onSubmit = catchAsync(async (data) => {
    const res = await changePassword(data).unwrap();

    toast.success(res?.message);
  });

  const passwordMatched = newPassword === confirmPassword;

  return (
    <div>
      <DashboardHeader
        title="Change Password"
        subtitle="Edit your candidate profile page info."
      />

      <div>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(changePasswordSchema)}
        >
          <div className="grid grid-cols-12 gap-y-1 gap-x-6">
            <FormInput
              name="oldPassword"
              label="Password"
              placeholder="Your old Password"
              type="password"
              mandatory={true}
              divClass="col-span-6"
            />
            <div className="col-span-6"></div>
            <FormInput
              name="newPassword"
              label="New Password"
              placeholder="Enter New Password"
              type="password"
              mandatory={true}
              divClass="col-span-6"
              setWatch={setNewPassword}
            />
            <FormInput
              name="newPasswordRepeat"
              label="New Password Repeat"
              placeholder="Repeat New Password"
              type="password"
              mandatory={true}
              divClass="col-span-6"
              setWatch={setConfirmPassword}
            />
          </div>
          <div className="mt-12">
            <ButtonPrimary
              className="btn_secondary w-[260px]"
              display="Save New Password"
              isLoading={isLoading}
              disabled={!passwordMatched}
            />
            {!passwordMatched && (
              <p className="text-red-600 text-sm mt-1">
                New Password didn't match
              </p>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}
