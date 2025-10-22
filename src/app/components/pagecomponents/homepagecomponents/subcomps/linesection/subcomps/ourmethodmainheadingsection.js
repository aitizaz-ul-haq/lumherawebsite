export default function OurMethodMainHeadingSection({ ourMethod }) {
  return (
    <div className="ourmethodsection-main-heading-container">
      <h3 className="ourmethodsection-main-heading font-kaisei">
        {ourMethod.mainHeading}
      </h3>
    </div>
  );
}
