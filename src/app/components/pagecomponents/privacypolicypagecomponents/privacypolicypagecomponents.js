// components/pagecomponents/privacypolicypagecomponents/privacypolicypagecomponents.jsx
import "../regulatorypolicypagecomponents/styles/regulatorypagecompoenents.css";

function ParaList({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <ul className="regcomp-firstsection-section-listing">
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}

function AddressBlock({ lines = [] }) {
  if (!Array.isArray(lines) || lines.length === 0) return null;
  return (
    <div className="regcomp-firstsection-section">
      {lines.map((line, i) => (
        <p key={i} className="regcomp-firstsection-section-text">{line}</p>
      ))}
    </div>
  );
}

export default function PrivacyPolicyPageComponents({ sections = [] }) {
  return (
    <div className="main-page-bckground">
      <div className="regcomp-main-container">
        {sections.length > 0 && (
          <section className="regcomp-firtsparasection">
            {sections.map((sec) => (
              <div key={sec.id} className="regcomp-firstsection-section">
                {/* Heading */}
                {sec.heading && (
                  <h2 className="regcomp-firstsection-section-heading">{sec.heading}</h2>
                )}

                {/* Plain paragraphs */}
                {Array.isArray(sec.paragraphs) &&
                  sec.paragraphs.map((p, i) => (
                    <p key={i} className="regcomp-firstsection-section-text">{p}</p>
                  ))}

                {/* Bulleted list (top-level) */}
                <ParaList items={sec.bullets} />

                {/* Optional small underlined heading for grouped lists */}
                {sec.listingHeading && (
                  <h5 className="regcomp-firstsection-section-listing-heading">{sec.listingHeading}</h5>
                )}

                {/* Sub-sections used under HOW WE OBTAIN / WHY WE COLLECT… */}
                {Array.isArray(sec.subSections) && sec.subSections.map((sub, j) => (
                  <div key={j} className="regcomp-firstsection-section">
                    {sub.subheading && (
                      <h4 className="regcomp-firstsection-section-subheading">{sub.subheading}</h4>
                    )}
                    {Array.isArray(sub.paragraphs) &&
                      sub.paragraphs.map((p, i) => (
                        <p key={i} className="regcomp-firstsection-section-text">{p}</p>
                      ))}
                    <ParaList items={sub.bullets} />
                    {sub.closingNote && (
                      <p className="regcomp-firstsection-section-text">{sub.closingNote}</p>
                    )}
                  </div>
                ))}

                {/* "Your Legal Rights" sub-sections */}
                {Array.isArray(sec.rightsSubsections) && sec.rightsSubsections.map((r, i) => (
                  <div key={i} className="regcomp-firstsection-section">
                    {r.title && (
                      <h4 className="regcomp-firstsection-section-subheading">{r.title}</h4>
                    )}
                    {Array.isArray(r.paragraphs) &&
                      r.paragraphs.map((p, k) => (
                        <p key={k} className="regcomp-firstsection-section-text">{p}</p>
                      ))}
                    {/* Optional ICO address block */}
                    {Array.isArray(r.icoAddress) && <AddressBlock lines={r.icoAddress} />}
                  </div>
                ))}

                {/* Optional address block within the section (used under Your rights) */}
                {/* {Array.isArray(sec.addressBlock) && <AddressBlock lines={sec.addressBlock} />} */}

                {/* Footer note (e.g., © line) */}
                {sec.footerNote && (
                  <p className="regcomp-firstsection-section-text">{sec.footerNote}</p>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
