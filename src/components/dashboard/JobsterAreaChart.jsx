import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./style/module.style.css";

export default function JobsterAreaChart({
  title,
  data,
  color,
  quantity,
  syncId,
  dataKey,
}) {
  const CustomTooltip = ({ payload, label, active }) => {
    if (active) {
      return (
        <div className="custom_tooltip">
          <p className="tooltip_label">{label}</p>
          <p className="tooltip_value">{`${dataKey}: ${payload[0]?.value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold tracking-tight mb-7">{title}</h2>
      <div className="border rounded-3xl p-7">
        <div className="flex items-end gap-3 mb-5 ml-6">
          <h2 className="text-[42px] font-semibold leading-10">{quantity}</h2>
          <p className="text-sm font-light leading-5 opacity-[0.7] mb-1">
            last 6 months
          </p>
        </div>
        <ResponsiveContainer width="100%" height={400} className="">
          <AreaChart data={data} syncId={syncId}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              fill={color}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
