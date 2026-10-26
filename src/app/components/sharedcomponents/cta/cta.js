// components/sharedcomponents/cta/cta.jsx
import { ESTHER_INVESTOR_URL } from "@/app/data/sitelinks";

export default function Cta({ text = "", buttonText = "" }) {
  return (
    <div className="cta-container">
      <p className="heading-and-paras-paragraph font-inter">{text}</p>
      <a
        href={ESTHER_INVESTOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button font-inter"
      >
        {buttonText}
      </a>
    </div>
  );
}
