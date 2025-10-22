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
        <button className="methodesection-banner-button font-inter">
          {ourMethod.banner.buttonText}
        </button>
      </div>
    </div>
  );
}
