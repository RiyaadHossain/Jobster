import Logo from "@/components/ui/Logo";
import { Link, NavLink } from "react-router-dom";
import { ENUM_USER_ROLE } from "@/enums/userRole";
import {
  candidateSidebardItems,
  companySidebardItems,
  dashboardSidebardItemInsights,
} from "@/constants/sidebarItems";
import "./style/style.css";
import { getUserInfo } from "../../services/auth.services";
import { useDispatch, useSelector } from "react-redux";
import { selectTab } from "../../redux/slices/sidebarItemSlice";

export const DashboardSidebar = () => {
  const dispatch = useDispatch();

  const role = getUserInfo().role;
  const sidebarItems =
    role === ENUM_USER_ROLE.candidate
      ? candidateSidebardItems
      : companySidebardItems;

  const selectedTab = useSelector((state) => state.sidebarItem.selectedTab);

  return (
    <div className="bg-secondaryLight col-span-2 p-10 fixed h-screen w-80 top-0">
      <Logo />
      <div className=" mt-8">
        <h4 className="sidebar_items_header">Admin Tools</h4>
        <ul className="sidebar_items_container">
          {sidebarItems.map((item, i) => (
            <li key={i} onClick={() => dispatch(selectTab(item.link))}>
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

      <div className="mt-8">
        <h4 className="sidebar_items_header">Insights</h4>
        <ul className="sidebar_items_container">
          {dashboardSidebardItemInsights.map((item, i) => (
            <li key={i} onClick={() => dispatch(selectTab(item.link))}>
              <Link
                className={`sidebar_item ${
                  selectedTab === item.link && "sidebar_item_active"
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
