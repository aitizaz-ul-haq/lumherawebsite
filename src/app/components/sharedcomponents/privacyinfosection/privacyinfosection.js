import Link from "next/link";
import "./styles/privacyinfosection.css";

/**
 * @param {{links: {href:string,label:string,title?:string}[], details: string}} props
 */
export default function PrivacyInfoSection({ links = [], details = "" }) {
  return (
    <div className="privacyinfosection-container general-linkage">
      <p className="privacyinfosection-links-section general-linkage font-inter">
        {links.map((l, i) => (
          <span key={l.href}>
            <Link
              href={l.href}
              className="privacyinfosection-link general-linkage font-inter"
              title={l.title || l.label}
              aria-label={l.title || l.label}
            >
              {l.label}
            </Link>
            {i < links.length - 1 ? <>&nbsp;|&nbsp;</> : null}
          </span>
        ))}
      </p>

      {details ? (
        <div className="privacyinfosection-location-info-container">
          <p className="privacyinfosection-location-info font-inter font-inter">
            {details}
          </p>
        </div>
      ) : null}
    </div>
  );
}
