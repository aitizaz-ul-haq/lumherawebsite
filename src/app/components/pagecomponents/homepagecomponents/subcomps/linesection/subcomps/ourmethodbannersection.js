import { ESTHER_INVESTOR_URL } from "@/app/data/sitelinks";

export default function OurMethodBannerSection({ ourMethod }) {
  return (
    <div className="methodesection-banner">
      <div className="methodesection-banner-content">
        <h4 className="methodesection-banner-heading font-kaisei">
          {ourMethod.banner.heading}
        </h4>
        <p className="methodesection-banner-description font-inter">
          {ourMethod.banner.description}
        </p>
        <a
          href={ESTHER_INVESTOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="methodesection-banner-button font-inter"
        >
          {ourMethod.banner.buttonText}
        </a>
      </div>
    </div>
  );
}
