import React from "react";

export default function ApplicantCard() {
  return (
    <div className="border rounded-md px-4 py-8">
      <h2 className="text-center font-semibold text-2xl mb-4">Riyad Hossain</h2>
      <div className="mt-2">
        <span className="font-semibold text-lg">Education:</span> CSE
        Department, Oxford University (2022)
      </div>
      <hr className="mt-2" />
      <div className="mt-2">
        <span className="font-semibold text-lg">Projects:</span> CSE Department,
        Oxford University (2022)
      </div>
      <hr className="mt-2" />
      <div className="mt-2">
        <span className="font-semibold text-lg">Experience:</span> CSE
        Department, Oxford University (2022)
      </div>
    </div>
  );
}
