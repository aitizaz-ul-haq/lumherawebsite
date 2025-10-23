export default function TwoParaListMiddleListItems({ listItems }) {
  return (
    <>
      {Array.isArray(listItems) && listItems.length > 0 && (
        <ul className="section-listing font-inter">
          {listItems.map((it) => (
            <li key={it.id ?? it.content}>{it.content ?? String(it)}</li>
          ))}
        </ul>
      )}
    </>
  );
}
