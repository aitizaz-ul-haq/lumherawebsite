import "./styles/multiplepara.css";

export default function MultiplePara({ paragraphs = [] }) {
  return (
    <div className="multiple-para-container">
      {Array.isArray(paragraphs) &&
        paragraphs.map((para, index) => {
          const text = typeof para === "string" ? para : para?.content || "";
          const key = typeof para === "string" ? index : para.id ?? index;
          return (
            <p key={key} className="multiple-para-text font-inter">
              {text}
            </p>
          );
        })}
    </div>
  );
}
