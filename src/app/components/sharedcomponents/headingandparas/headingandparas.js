import "./styles/headingandparas.css";

export default function HeadingAndParas({ heading = "", paragraphs = [] }) {
  return (
    <div className="heading-and-paras-container">
      {heading ? <h2 className="heading-and-paras-heading font-kaisei">{heading}</h2> : null}

      {Array.isArray(paragraphs) &&
        paragraphs.map((para, i) => {
          const text = typeof para === "string" ? para : para?.content || "";
          const key = typeof para === "string" ? i : para.id ?? i;
          return (
            <p key={key} className="heading-and-paras-paragraph font-inter">
              {text}
            </p>
          );
        })}
    </div>
  );
}
