import "./style/pagination.style.css";
import ButtonWithArrow from "./ButtonWithArrow";

export default function Pagination({ page, setPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex justify-between">
      <ul className="flex justify-center">
        {pages.map((num, i) => (
          <li key={num}>
            <span
              className={`${page === num && "pagination_btn_active"} ${
                i === 0 && "first_page_btn"
              } ${i === pages.length - 1 && "last_page_btn"} pagination_btn`}
              onClick={() => setPage(num)}
            >
              <span className="text-md">{num}</span>
            </span>
          </li>
        ))}
      </ul>
      {page < totalPages && (
        <div>
          <ButtonWithArrow
            onHandleClick={() => setPage(page + 1)}
            display="Show Me More"
          />
        </div>
      )}
    </nav>
  );
}
