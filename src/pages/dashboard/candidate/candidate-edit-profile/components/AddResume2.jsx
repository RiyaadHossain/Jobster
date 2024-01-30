import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaDownload, FaFilePdf, FaTrashAlt } from "react-icons/fa";
import { useDeleteResumeMutation } from "@/redux/api/candidate";
import { FadeLoader } from "react-spinners";
import { catchAsync } from "@/helpers/catchAsync";
import { useEditProfileMutation } from "../../../../../redux/api/candidate";
import { fileUploader } from "../../../../../helpers/fileUploader";

export default function AddResume2({ resumeData, meLoading }) {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const [editProfile, { isLoading }] = useEditProfileMutation();
  const [deleteResume, { isLoading: deleteLoading }] =
    useDeleteResumeMutation();

  const handleFileUpload = async (event) => {
    setUploadError("");
    const file = event.target.files[0];
    inputRef.current.value = null;

    if (file.type !== "application/pdf") {
      setUploadError("Resume must be a pdf file");
      return;
    }

    setLoading(true);

    const { fileName, fileURL } = await fileUploader(file);

    const data = {
      resume: {
        fileName,
        fileURL,
      },
    };

    await editProfile(data).unwrap();
    toast.success("Resume Uploaded successfully");

    setLoading(false);
  };

  const onDeleteResume = catchAsync(async () => {
    const res = await deleteResume().unwrap();
    toast.success(res?.message);
  });

  const newFileName = resumeData?.fileName;

  return (
    <div>
      <input
        ref={inputRef}
        onChange={handleFileUpload}
        className="hidden"
        type="file"
        name=""
        id="upload_resume"
      />
      <div
        className={`border relative ${
          !uploadError ? "border-lightGray" : "border-red-500"
        } rounded-3xl p-8 flex justify-between items-center`}
      >
        <div className="flex items-center gap-5">
          <FaFilePdf size={60} className="text-black/50" />
          <span className="font-semibold">
            {newFileName || "No Resume uploaded"}
          </span>
        </div>
        <div>
          {!newFileName ? (
            <label className="btn_accent" htmlFor="upload_resume">
              Upload PDF
            </label>
          ) : (
            <div className="flex gap-2">
              <a
                href={resumeData?.fileURL}
                target="_blank"
                rel="noreferrer"
                type="button"
                className="btn_icon"
              >
                <FaDownload />
              </a>
              <button
                onClick={onDeleteResume}
                type="button"
                className="btn_icon"
              >
                <FaTrashAlt />
              </button>
            </div>
          )}
        </div>
        {(loading || meLoading || isLoading || deleteLoading) && (
          <div className="absolute left-0 w-full h-full bg-gray-300 rounded-3xl flex_cen">
            <FadeLoader color="#44195D" />
          </div>
        )}
      </div>
      {uploadError && (
        <span className="text-red-500 text-sm mt-3">{uploadError}</span>
      )}
    </div>
  );
}
