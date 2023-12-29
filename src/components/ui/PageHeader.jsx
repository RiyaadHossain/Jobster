import "./style/module.style.css";

export default function PageHeader({ title, subtitle, className }) {
  return (
    <div className={`py-14 ${className}`}>
      <div className="max_container">
        <h2 className="section_title">{title}</h2>
        <p className="section_subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
