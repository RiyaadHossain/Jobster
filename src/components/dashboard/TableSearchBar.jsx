import { IoIosSearch } from "react-icons/io";

export default function TableSearchBar({ quantity, display, setSearchText }) {
  return (
    <div className="flex justify-end items-center gap-5">
      <p className="font-semibold">
        {quantity} {display}{quantity > 1 && "s"}
      </p>
      <div>
        <div className="flex items-center gap-3 border px-4 py-[6px] rounded-3xl">
          <IoIosSearch className="text-lg" />
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="border-none shadow-none p-0 focus:border-none focus:ring-0 text-base"
            type="text"
            placeholder={`Search ${display}s...`}
          />
        </div>
      </div>
    </div>
  );
}
