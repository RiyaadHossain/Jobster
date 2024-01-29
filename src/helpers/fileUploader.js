import axios from "axios";

export const fileUploader = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

  const uploaded = await axios.post(
    process.env.REACT_APP_CLOUDINARY_URL,
    formData
  );

  const fileName = uploaded.data.original_filename;
  const fileURL = uploaded.data.secure_url;

  return { fileName, fileURL };
};
