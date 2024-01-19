import React from "react";
import toast from "react-hot-toast";
import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

export default function JobActionBtn() {
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="border border-black rounded-full group p-3 hover:bg-black transition-colors">
          <IoHeartOutline className="text-2xl group-hover:text-white" />
        </div>
        <div className="border border-black rounded-full group p-3 hover:bg-black transition-colors">
          <IoShareSocialOutline className="text-2xl group-hover:text-white" />
        </div>
        <ButtonPrimary
          display="Apply"
          onClickFunc={() =>
            toast.success("Applied successfully", {
              id: "apply",
            })
          }
        />
      </div>
    </div>
  );
}
