import React from "react";
import Loader from "@/components/ui/Loader";

export default function LoadingState() {
  return (
    <div className="mt-32">
      <Loader />
      <p className="text-center text-lg font-light">Activating your account</p>
    </div>
  );
}
