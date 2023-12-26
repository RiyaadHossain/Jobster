import { useFormContext } from "react-hook-form";

export default function FormImg({
  label,
  id,
  name,
  height,
  width,
  imgUrl,
  setImgUrl,
}) {
  const setPreviewImage = (e) => {
    const id = e.target.id;
    const url = URL.createObjectURL(e.target.files[0]);
    setImgUrl({ ...imgUrl, [id]: url });
  };

  const { register } = useFormContext();

  return (
    <div className={`rounded-3xl mt-6 relative ${height} ${width}`}>
      <label
        htmlFor={id}
        className="w-full border border-accent border-dashed h-full rounded-3xl inline-block"
      >
        <span className="flex_cen h-full text-[13px] font-medium">{label}</span>
      </label>
      <input
        {...register(name)}
        type="file"
        name={name}
        id={id}
        className="hidden"
        onChange={setPreviewImage}
      />
      <img
        src={imgUrl[id]}
        alt="Img"
        className={`absolute top-0 w-full h-full rounded-3xl object-cover ${
          !imgUrl[id] && "hidden"
        }`}
      />
    </div>
  );
}
