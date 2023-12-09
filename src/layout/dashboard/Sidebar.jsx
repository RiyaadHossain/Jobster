import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style/style.css";
import {
  // candidateSidebardItems,
  companySidebardItems,
  dashboardSidebardItemInsights,
} from "../../constants/sidebarItems";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState("/dashboard");

  return (
    <div className="bg-fifth col-span-2 p-10 fixed h-screen w-80 top-0">
      <Link to="/" className="font-extrabold text-2xl">
        <span className="text-blue-600 ">J</span>obster
      </Link>
      <div className=" mt-8">
        <h4 className="text-sm font-light leading-5 text-accent mb-2 ">
          Admin Tools
        </h4>
        <ul className="flex flex-col gap-2 w-full h-full">
          {companySidebardItems.map((item, i) => (
            <li key={i} onClick={() => setSelectedTab(item.link)}>
              <NavLink
                className={`sidebar_item ${
                  selectedTab === item.link && "sidebar_item_active"
                }`}
                to={item.link}
              >
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className=" mt-8">
        <h4 className="text-sm font-light leading-5 text-accent mb-2 ">
          Insights
        </h4>
        <ul className="flex flex-col gap-2 w-full h-full">
          {dashboardSidebardItemInsights.map((item, i) => (
            <li key={i} onClick={() => setSelectedTab(item.display)}>
              <Link
                className={`sidebar_item ${
                  selectedTab === item.display && "sidebar_item_active"
                }`}
                to={item.link}
              >
                {item.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
