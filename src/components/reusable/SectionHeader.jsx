export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center pb-[56px]">
      <h2 className="section_title">{title}</h2>
      <p className="section_subtitle">{subtitle}</p>
    </div>
  );
}
