export default function DashboardHeader({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-4xl font-bold leading-10 tracking-tight mb-2">
        {title}
      </h2>
      <p className="text-base font-light leading-6 opacity-[0.7]">{subtitle}</p>
    </div>
  );
}
