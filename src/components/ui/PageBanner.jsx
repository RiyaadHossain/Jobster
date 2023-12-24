export default function PageBanner({
  banner,
  brandImg,
  rounded,
  title,
  subtitle,
  insideIcon = true,
}) {
  return (
    <div className="relative mb-12">
      <div className="absolute w-full rounded-3xl h-full bg-black/50"></div>
      <div className="h-96 rounded-3xl overflow-hidden">
        <img className="h-full w-full object-cover" src={banner} alt="" />
      </div>
      {insideIcon ? (
        <div className="flex items-center gap-5 absolute left-8 bottom-8 right-8 ">
          <div className="h-[100px] w-[100px] ">
            <img src={brandImg} alt="" className={rounded} />
          </div>
          <div className="text-white">
            <h3 className="text-4xl font-bold leading-10 tracking-tight">
              {title}
            </h3>
            <p className="text-base font-light leading-6">{subtitle}</p>
          </div>
        </div>
      ) : (
        <div className="p-[2px] bg-white absolute left-[6%] bottom-[-16%] w-[120px] h-[120px] rounded-3xl">
          <img src={brandImg} alt="" className="rounded-3xl" />
        </div>
      )}
    </div>
  );
}
