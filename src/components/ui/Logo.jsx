import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="font-extrabold text-2xl">
      <span className="text-blue-600 ">J</span>obster
    </Link>
  );
}
