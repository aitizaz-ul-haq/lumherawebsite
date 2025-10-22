// components/sharedcomponents/headingandlist/headingandlist.jsx

export default function HeadingAndList({
  heading = "",
  substatement = "",
  listItems = [],
}) {
  return (
    <div className="heading-and-list-container">
      {heading ? (
        <h2 className="heading-and-paras-heading font-kaisei">{heading}</h2>
      ) : null}

      {substatement ? (
        <p className="heading-and-subheading-subheading font-kaisei">
          {substatement}
        </p>
      ) : null}

      {Array.isArray(listItems) && listItems.length > 0 && (
        <ul className="section-listing font-inter">
          {listItems.map((it) => (
            <li key={it.id ?? it.content}>{it.content ?? String(it)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
