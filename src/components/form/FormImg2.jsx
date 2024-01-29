import { useGetImageUrlQuery } from "@/redux/api/user";
import { catchAsync } from "@/helpers/catchAsync";
import toast from "react-hot-toast";
import { FadeLoader } from "react-spinners";
import { useState } from "react";
import axios from "axios";
import { useEditProfileMutation } from "../../redux/api/candidate";
import { useEditCompanyProfileMutation } from "../../redux/api/company";
import { getUserInfo } from "../../services/auth.services";
import { ENUM_USER_ROLE } from "../../enums/userRole";
import { userFormatText } from "../../utils/userFormatText";

export default function FormImg2({ label, id, name, height, width }) {
  const [imgUrl, setImgUrl] = useState("");
  const role = getUserInfo().role;

  const { data } = useGetImageUrlQuery({ field: id });
  const [editCandidateProfile, { isLoading: candLoading }] =
    useEditProfileMutation();
  const [editCompanyProfile, { isLoading: compLoading }] =
    useEditCompanyProfileMutation();

  const onUploadImage = catchAsync(async (e) => {
    const id = e.target.id;
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

    const uploaded = await axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      formData
    );

    const imgUrl = uploaded?.data?.secure_url;

    const data = {
      [id]: imgUrl,
    };

    if (role === ENUM_USER_ROLE.candidate)
      await editCandidateProfile(data).unwrap();
    if (role === ENUM_USER_ROLE.company)
      await editCompanyProfile(data).unwrap();

    toast.success(`${userFormatText(id)} Uploaded successfully`);
    setImgUrl(imgUrl);
  });

  const dbImgUrl = data?.data?.imageUrl;

  return (
    <div className={`rounded-3xl mt-6 relative ${height} ${width}`}>
      <label
        htmlFor={id}
        className="w-full border border-accent border-dashed h-full rounded-3xl inline-block"
      >
        <span className="flex_cen h-full text-[13px] font-medium">{label}</span>
      </label>
      <input
        type="file"
        name={name}
        id={id}
        className="hidden"
        onChange={onUploadImage}
      />
      <label htmlFor={id} className="cursor-pointer">
        <img
          src={imgUrl || dbImgUrl}
          alt="Img"
          className={`absolute top-0 w-full h-full rounded-3xl object-cover ${
            !imgUrl && !dbImgUrl && "hidden"
          } `}
        />
      </label>
      {(candLoading || compLoading) && (
        <div className="absolute top-0 rounded-3xl w-full h-full flex_cen bg-primaryLight">
          <FadeLoader color="#44195D" />
        </div>
      )}
    </div>
  );
}
