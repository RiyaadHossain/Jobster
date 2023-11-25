import { Link } from "react-router-dom";
import notFound from "../../assets/20824300_6363145.svg";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-screen w-screen grid grid-cols-2">
        <div className=" col-span-2 md:col-span-1">
          <img src={notFound} alt="" className="w-full h-full]" />
        </div>
        <div className=" text-center col-span-2 md:col-span-1 flex justify-center items-center flex-col">
          <h1 className="text-7xl font-extrabold mb-3">404</h1>
          <p className="mb-8 font-light">
            The Page you're looking for is not found
          </p>
          <Link to="/" className="btn">
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
