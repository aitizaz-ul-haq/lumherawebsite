// components/sharedcomponents/twoparalistmiddle/twoparalistmiddle.jsx
export default function TwoParaListMiddle({
  paraOne = "",
  listItems = [],
  paraTwo = "",
}) {
  return (
    <div className="heading-and-paras-container">
      {paraOne && (
        <p className="heading-and-paras-paragraph font-inter">{paraOne}</p>
      )}

      {Array.isArray(listItems) && listItems.length > 0 && (
        <ul className="section-listing font-inter">
          {listItems.map((it) => (
            <li key={it.id ?? it.content}>{it.content ?? String(it)}</li>
          ))}
        </ul>
      )}

      {paraTwo && (
        <p className="heading-and-paras-paragraph font-inter">{paraTwo}</p>
      )}
    </div>
  );
}
