// components/sharedcomponents/headinglistandparas/headinglistandparas.jsx
// import "./styles/headinglistandparas.css"; 

export default function HeadingListAndParas({
  heading = "",
  paragraphOne = "",
  listItems = [],
  paragraphTwo = "",
}) {
  return (
    <div className="heading-and-paras-container">
      {heading ? (
        <h2 className="heading-and-paras-heading font-kaisei">{heading}</h2>
      ) : null}

      {paragraphOne ? (
        <p className="heading-and-paras-paragraph font-inter">{paragraphOne}</p>
      ) : null}

      {Array.isArray(listItems) && listItems.length > 0 && (
        <ul className="section-listing font-inter">
          {listItems.map((it) => (
            <li key={it.id ?? it.content}>{it.content ?? String(it)}</li>
          ))}
        </ul>
      )}

      {paragraphTwo ? (
        <p className="heading-and-paras-paragraph font-inter">{paragraphTwo}</p>
      ) : null}
    </div>
  );
}
