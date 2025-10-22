// components/pagecomponents/disclaimerpagecomponents/disclaimerpagecomponents.jsx
import "../regulatorypolicypagecomponents/styles/regulatorypagecompoenents.css";

export default function DisclaimerPageComponents({ sections = [] }) {
  return (
    <div className="main-page-bckground">
      <div className="regcomp-main-container">
        {sections.length > 0 && (
          <section className="regcomp-firtsparasection">
            {sections.map((sec) => (
              <div key={sec.id} className="regcomp-firstsection-section">
                {sec.heading && (
                  <h2 className="regcomp-firstsection-section-heading">{sec.heading}</h2>
                )}
                {Array.isArray(sec.paragraphs) &&
                  sec.paragraphs.map((p, i) => (
                    <p key={i} className="regcomp-firstsection-section-text">
                      {p}
                    </p>
                  ))}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
