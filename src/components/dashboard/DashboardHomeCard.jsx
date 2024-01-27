import { userFormatText } from "@/utils/userFormatText";

export default function DashboardHomeCard({ type, quantity, icon, bg }) {
  return (
    <div
      className={`flex gap-4 items-center justify-center p-8 ${bg} rounded-3xl shadow-md`}
    >
      <div className="w-24 h-24 bg-white flex_cen rounded-3xl shadow-md text-[42px]">
        {icon}
      </div>
      <div>
        <h1 className="text-[42px] font-semibold tracking-tight leading-10">
          {quantity}
        </h1>
        <p className="text-sm font-light leading-5 opacity-[0.7]">
          {userFormatText(type)}
        </p>
      </div>
    </div>
  );
}
