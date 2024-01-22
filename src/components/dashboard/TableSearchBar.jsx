import { IoIosSearch } from "react-icons/io";

export default function TableSearchBar({ quantity, display, setSearchTerm }) {
  return (
    <div className="flex justify-end items-center gap-5">
      <p className="font-semibold">
        {quantity} {display}
        {quantity > 1 && "s"}
      </p>
      <div>
        <div className="flex relative items-center border px-4 rounded-3xl">
          <IoIosSearch className="text-lg absolute pointer-events-none" />
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-none shadow-none p-0 focus:ring-0 text-base py-[6px] pl-7"
            type="text"
            placeholder={`Search ${display}s...`}
          />
        </div>
      </div>
    </div>
  );
}
