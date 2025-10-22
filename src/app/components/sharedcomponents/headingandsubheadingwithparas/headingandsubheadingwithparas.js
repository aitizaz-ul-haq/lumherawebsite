// components/sharedcomponents/headingandsubheading/headingandsubheadingwithparas.jsx
import "./styles/headingandsubheadingwithparas.css";

export default function HeadingAndSubheadingWithParas({
  // SECTION MODE (preferred for About "values")
  data = null, // { heading, subsection: [{ id, subheading, content }] }

  // SIMPLE MODE (fallback / legacy)
  heading = "",
  subheading = "",
  paragraphs = [],
}) {
  // If `data` is provided and looks like the values section, render that.
  const isSectionMode =
    data &&
    typeof data === "object" &&
    ("heading" in data || Array.isArray(data?.subsection));

  if (isSectionMode) {
    const { heading: sectionHeading = "", subsection = [] } = data || {};

    return (
      <div className="heading-and-subheading-with-paras-container">
        {sectionHeading ? (
          <h2 className="heading-and-subheading-heading font-kaisei">
            {sectionHeading}
          </h2>
        ) : null}

        {Array.isArray(subsection) &&
          subsection.map((item) => (
            <div key={item.id ?? item.subheading}>
              {item?.subheading ? (
                <h3 className="heading-and-subheading-subheading font-kaisei">
                  {item.subheading}
                </h3>
              ) : null}

              {item?.content ? (
                <p className="heading-and-subheading-paragraph font-inter">
                  {item.content}
                </p>
              ) : null}
            </div>
          ))}
      </div>
    );
  }

  // SIMPLE MODE (backwards-compatible)
  return (
    <div className="heading-and-subheading-with-paras-container">
      {heading ? (
        <h2 className="heading-and-subheading-heading font-kaisei">
          {heading}
        </h2>
      ) : null}

      {subheading ? (
        <h3 className="heading-and-subheading-subheading font-kaisei">
          {subheading}
        </h3>
      ) : null}

      {Array.isArray(paragraphs) &&
        paragraphs.map((para, i) => {
          const text = typeof para === "string" ? para : para?.content || "";
          const key = typeof para === "string" ? i : para.id ?? i;
          return (
            <p key={key} className="heading-and-subheading-paragraph font-inter">
              {text}
            </p>
          );
        })}
    </div>
  );
}
