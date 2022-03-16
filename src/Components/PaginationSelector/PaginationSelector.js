export function PaginationSelector({ itensPerPage, setItensPerPage }) {
  return (
    <div>
      <b>Show: </b>
      <select
        value={itensPerPage}
        onChange={(e) => {
          setItensPerPage(Number(e.target.value));
        }}
      >
        <option value={30}>30</option>
        <option value={60}>60</option>
        <option value={90}>90</option>
      </select>
    </div>
  );
}
