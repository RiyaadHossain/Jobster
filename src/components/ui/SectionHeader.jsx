import "./style/module.style.css";

export default function SectionHeader({ title, subtitle, classes }) {
  return (
    <div className={`text-center pb-[56px] ${classes}`}>
      <h2 className="section_title">{title}</h2>
      <p className="section_subtitle">{subtitle}</p>
    </div>
  );
}
