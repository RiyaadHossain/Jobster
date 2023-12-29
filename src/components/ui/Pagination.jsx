import { useState } from "react";
import "./style/pagination.style.css"

export default function Pagination() {
  const [page, setPage] = useState(1);

  const pages = [1, 2, 3, 4];

  return (
    <nav>
      <ul className="flex justify-center">
        {pages.map((num) => (
          <li key={num}>
            <span
              className={`${
                page === num ? "pagination_btn_active" : "pagination_btn"
              }`}
              onClick={() => setPage(num)}
            //   href="/"
            >
              <span className="material-icons text-sm">{num}</span>
            </span>
          </li>
        ))}
        {/* <li>
          <a className="pagination_btn" href="/" ariaLabel="Next">
            <span className="material-icons text-sm">{`>`}</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
