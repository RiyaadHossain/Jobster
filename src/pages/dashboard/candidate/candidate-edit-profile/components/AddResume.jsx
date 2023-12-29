import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaDownload, FaFilePdf, FaTrashAlt } from "react-icons/fa";

export default function AddResume() {
  const [uploadError, setUploadError] = useState("");
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    setUploadError("");

    if (file.type !== "application/pdf") {
      setUploadError("Resume must be a pdf file");
      return;
    }

    if (file) {
      try {
        const formData = new FormData();
        formData.append("resume", file);

        // Example: Replace 'YOUR_UPLOAD_ENDPOINT' with your actual backend endpoint
        // const response = await fetch("YOUR_UPLOAD_ENDPOINT", {
        //   method: "POST",
        //   body: formData,
        // });

        // if (response.ok) {
        setResumeUploaded(true);
        setFileName(file.name);
        // } else {
        //   toast.error("Upload failed");
        // }
      } catch (error) {
        toast.error("Error occurred during upload");
      }
    }
  };

  const downloadResume = () => {};
  const deleteResume = () => {
    setResumeUploaded(false);
  };

  return (
    <div>
      <input
        onChange={handleFileUpload}
        className="hidden"
        type="file"
        name=""
        id="upload_resume"
      />
      <div
        className={`border ${
          !uploadError ? "border-lightGray" : "border-red-500"
        } rounded-3xl p-8 flex justify-between items-center`}
      >
        <div className="flex items-center gap-5">
          <FaFilePdf size={60} className="text-black/50" />
          <span className="font-semibold">
            {!resumeUploaded ? "No Resume Uploaded" : fileName}
          </span>
        </div>
        <div>
          {!resumeUploaded ? (
            <label className="btn_accent" htmlFor="upload_resume">
              Upload PDF
            </label>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={downloadResume}
                type="button"
                className="btn_icon"
              >
                <FaDownload />
              </button>
              <button
                onClick={deleteResume}
                type="button"
                className="btn_icon"
              >
                <FaTrashAlt />
              </button>
            </div>
          )}
        </div>
      </div>
      {uploadError && (
        <span className="text-red-500 text-sm mt-3">{uploadError}</span>
      )}
    </div>
  );
}
