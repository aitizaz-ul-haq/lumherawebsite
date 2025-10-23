export default function HandPCompParagraphSection({ paragraphs }) {
  return (
    <>
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
    </>
  );
}
