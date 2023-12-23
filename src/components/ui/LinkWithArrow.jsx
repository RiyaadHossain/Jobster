import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function LinkWithArrow({ display, link }) {
  return (
    <Link
      to={link}
      className="text-primary font-medium flex gap-3 hover:gap-5 transition-all items-center mt-5 "
    >
      {display} <MdKeyboardArrowRight />
    </Link>
  );
}
