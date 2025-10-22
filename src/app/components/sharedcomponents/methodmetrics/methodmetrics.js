// components/sharedcomponents/methodmetrics/methodmetrics.jsx
// import "./styles/methodmetrics.css"; 

export default function MethodMetrics({
  heading = "",
  statementOne = "",
  statementTwo = "",
  metrics = [], // [{id, subheading, content}]
  closingParagraph = "",
}) {
  return (
    <div className="heading-and-subheading-with-paras-container">
      {heading ? (
        <h2 className="heading-and-subheading-heading font-kaisei">{heading}</h2>
      ) : null}

      {statementOne ? (
        <p className="heading-and-subheading-paragraph font-inter">
          {statementOne}
        </p>
      ) : null}

      {statementTwo ? (
        <p className="heading-and-subheading-paragraph font-inter">
          {statementTwo}
        </p>
      ) : null}

      {Array.isArray(metrics) &&
        metrics.map((m) => (
          <div key={m.id ?? m.subheading}>
            {m?.subheading ? (
              <h3 className="heading-and-subheading-subheading font-kaisei">
                {m.subheading}
              </h3>
            ) : null}
            {m?.content ? (
              <p className="heading-and-subheading-paragraph font-inter">
                {m.content}
              </p>
            ) : null}
          </div>
        ))}

      {closingParagraph ? (
        <p className="heading-and-subheading-paragraph font-inter">
          {closingParagraph}
        </p>
      ) : null}
    </div>
  );
}
