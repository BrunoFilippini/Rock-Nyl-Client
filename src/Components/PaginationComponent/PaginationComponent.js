export function PaginationComponent({ pages, currentPage, setCurrentPage }) {
  return (
    <div>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            className="bg-white shadow-sm rounded m-2"
            style={index === currentPage ? { color: "blue" } : null}
            key={index}
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
