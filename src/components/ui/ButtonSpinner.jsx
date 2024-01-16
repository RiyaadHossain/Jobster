import React from "react";
import { HashLoader } from "react-spinners";

export default function ButtonSpinner({ size, color }) {
  return <HashLoader size={size || 20} color={color || "#fff"} />;
}
