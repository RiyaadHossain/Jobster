import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { navbarItems } from "../../constants/navbarItems";

export default function Sidebar({ menuOpen, toggleMenu }) {
  return (
    <div
      className={`fixed top-0 h-screen bg-gray-200 min-w-[400px] z-[101] ${
        menuOpen ? "left-0" : "-left-[32rem]"
      } transition-all duration-500 `}
    >
      <div className="flex justify-end p-5">
        <RxCross1 className="text-2xl" onClick={toggleMenu} />
      </div>
      <div className="mt-6 ml-12">
        <ul className="flex flex-col gap-6 font-semibold text-lg">
          {navbarItems.map((item) => (
            <li key={item.display}>
              <Link to={item.link}>{item.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
