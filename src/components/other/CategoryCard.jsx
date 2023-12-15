import React from "react";
import { BiPieChart } from "react-icons/bi";

export default function CategoryCard() {
  return (
    <div className="flex items-center w-full border rounded-3xl group hover:bg-primary/10 transition-all cursor-pointer">
      <div className="bg-primary/20 p-5 rounded-3xl group-hover:bg-primary transition-all">
        <BiPieChart className="text-6xl group-hover:text-white transition-all" />
      </div>
      <div className="ml-7">
        <h3 className="text-lg font-medium leading-7">Business Development</h3>
        <p className="text-sm font-light leading-5">1 open positions</p>
      </div>
    </div>
  );
}
