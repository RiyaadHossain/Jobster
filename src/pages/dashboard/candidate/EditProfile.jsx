import DashboardHeader from "../../../components/reusable/DashboardHeader";
import { useState } from "react";

export default function EditProfile() {
  const [imgUrl, setImgUrl] = useState({ banner: null, avatar: null });

  const setPreviewImage = (e) => {
    const id = e.target.id;
    const url = URL.createObjectURL(e.target.files[0]);
    console.log(typeof id);
    console.log(url);
    setImgUrl({ ...imgUrl, [id]: url });
    console.log(imgUrl);
  };

  return (
    <div>
      <DashboardHeader
        title="Edit Profile"
        subtitle="Edit your candidate profile page info."
      />

      <div className="mt-12">
        <form>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="flex flex-col items-start mb-4">
                <label htmlFor="name" className="ml-5">
                  Name
                </label>
                <input
                  placeholder="Your Name"
                  type="email"
                  id="name"
                  className="w-full"
                />
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col items-start mb-4 w-1/2 flex-grow">
                  <label htmlFor="email" className="ml-5">
                    Email
                  </label>
                  <input
                    placeholder="Type Email"
                    type="password"
                    id="email"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col items-start mb-4 w-1/2 flex-grow">
                  <label htmlFor="phone" className="ml-5">
                    Phone
                  </label>
                  <input
                    placeholder="Type Phone"
                    type="number"
                    id="phone"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start mb-4">
                <label htmlFor="title" className="ml-5">
                  Title
                </label>
                <input
                  placeholder="Type Title"
                  type="text"
                  id="title"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col items-start mb-4">
                <label htmlFor="about" className="ml-5">
                  About
                </label>
                <textarea
                  rows={5}
                  placeholder="Bio"
                  id="about"
                  className="w-full resize-none"
                />
              </div>
            </div>
            <div className="col-span-4">
              <div className="h-40 rounded-3xl mt-6 relative ">
                <label
                  htmlFor="banner"
                  className="w-full border border-accent border-dashed h-full rounded-3xl inline-block"
                >
                  <span className="flex_cen h-full text-[13px] font-medium">
                    Upload cover photo
                  </span>
                </label>
                <input
                  type="file"
                  name=""
                  id="banner"
                  className="hidden"
                  onChange={setPreviewImage}
                />
                <img
                  src={imgUrl.banner}
                  alt=""
                  className={`absolute top-0 w-full h-full rounded-3xl object-cover ${
                    !imgUrl.banner && "hidden"
                  }`}
                />
              </div>

              <div className="h-32 w-32 rounded-3xl mt-6 relative">
                <label
                  htmlFor="avatar"
                  className="w-full border border-accent border-dashed h-full rounded-3xl inline-block"
                >
                  <span className="flex_cen h-full text-[13px] font-medium">
                    Upload Image
                  </span>
                </label>
                <input
                  type="file"
                  name=""
                  id="avatar"
                  className="hidden"
                  onChange={setPreviewImage}
                />
                <img
                  src={imgUrl.avatar}
                  alt=""
                  className={`absolute top-0 w-full h-full rounded-3xl object-cover ${
                    !imgUrl.avatar && "hidden"
                  }`}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
