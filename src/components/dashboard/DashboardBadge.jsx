
export default function DashboardBadge({ display, bg, classes }) {
  return (
    <div
      className={`text-xs inline-block px-2 py-[1px] mb-1 text-white rounded-full font-medium ${bg} ${classes}`}
    >
      {display}
    </div>
  );
}
