import React from "react";
import DashboardHeader from "../../../../components/ui/DashboardHeader";
import FormInput from "../../../../components/form/FormInput";

export default function ChangePassword() {
  return (
    <div>
      <DashboardHeader
        title="Change Password"
        subtitle="Edit your candidate profile page info."
      />

      <div>
        <form>
          <div className="grid grid-cols-12 gap-y-1 gap-x-6">
            <FormInput
              id="password"
              label="Password"
              placeholder="Your old Password"
              type="password"
              mandatory={true}
              divClass="col-span-6"
            />
            <div className="col-span-6"></div>
            <FormInput
              id="new_password"
              label="New Password"
              placeholder="Enter New Password"
              type="password"
              mandatory={true}
              divClass="col-span-6"
            />
            <FormInput
              id="new_password_repeat"
              label="New Password Repeat"
              placeholder="Repeat New Password"
              type="password"
              mandatory={true}
              divClass="col-span-6"
            />
          </div>
          <div className="mt-12">
            <button className="btn_secondary">Save New Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}
