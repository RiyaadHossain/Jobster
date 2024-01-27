import { ENUM_MODULE } from "@/enums/module";
import { isHttpValid } from "@/utils/isValidUrl";

export default function PageBanner({
  banner,
  brandImg,
  rounded,
  title,
  subtitle,
  module,
  insideIcon = true,
}) {
  const isCandidate = module === ENUM_MODULE.CANDIDATE;

  const NameLogo = (
    <div
      className={`w-full h-full ${
        isCandidate ? "rounded-full" : "rounded-2xl"
      } border border-primaryLight flex_cen bg-primary font-bold text-white text-4xl`}
    >
      {title?.substr(0, 1)?.toUpperCase()}
    </div>
  );

  return (
    <div className="relative mb-12">
      <div className="absolute w-full rounded-3xl h-full bg-black/50"></div>
      <div className="h-96 rounded-3xl overflow-hidden">
        {isHttpValid(banner) ? (
          <img className="h-full w-full object-cover" src={banner} alt="" />
        ) : (
          <div className="w-full h-full bg-primaryDark"></div>
        )}
      </div>
      {insideIcon ? (
        <div className="flex items-center gap-5 absolute left-8 bottom-8 right-8 ">
          <div className="h-[100px] w-[100px] ">
            {brandImg ? (
              <img
                src={brandImg}
                alt=""
                className={`${rounded} w-full h-full object-cover`}
              />
            ) : (
              NameLogo
            )}
          </div>
          <div className="text-white">
            <h3 className="text-4xl font-bold leading-10 tracking-tight">
              {title}
            </h3>
            <p className="text-base font-light leading-6">{subtitle}</p>
          </div>
        </div>
      ) : (
        <div className="p-[2px] bg-white absolute left-[6%] bottom-[-16%] w-[120px] h-[120px] rounded-2xl">
          {brandImg ? (
            <img
              src={brandImg}
              alt=""
              className="rounded-2xl w-full h-full object-cover"
            />
          ) : (
            NameLogo
          )}
        </div>
      )}
    </div>
  );
}
