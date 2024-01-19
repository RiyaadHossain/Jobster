import {
  useGetImageUrlQuery,
  useUploadImageMutation,
} from "../../redux/api/user";
import { catchAsync } from "../../helpers/catchAsync";
import toast from "react-hot-toast";
import { FadeLoader } from "react-spinners";
import { useState } from "react";

export default function FormImg({ label, id, name, height, width }) {
  const [imgUrl, setImgUrl] = useState("");
  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const { data } = useGetImageUrlQuery({ field: id });

  const setPreviewImage = catchAsync(async (e) => {
    const id = e.target.id;
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("field", id);
    formData.append("image", file);
    const res = await uploadImage(formData).unwrap();

    toast.success(res?.message);
    setImgUrl(res?.data?.imageUrl);
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
        onChange={setPreviewImage}
      />
      <label htmlFor={id} className="cursor-pointer">
        <img
          src={imgUrl || dbImgUrl}
          alt="Img"
          className={`absolute top-0 w-full h-full rounded-3xl object-cover ${
            !imgUrl && !dbImgUrl && "hidden"
          }`}
        />
      </label>
      {isLoading && (
        <div className="absolute top-0 rounded-3xl w-full h-full flex_cen bg-primaryLight">
          <FadeLoader color="#44195D" />
        </div>
      )}
    </div>
  );
}
