import "./style/tooltip.style.css";

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip">{text}</div>
    </div>
  );
};

export default Tooltip;
