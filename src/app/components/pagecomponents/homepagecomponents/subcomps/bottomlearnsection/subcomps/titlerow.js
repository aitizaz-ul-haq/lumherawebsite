export default function TitleRow({ tinyTitle, largeHeading }) {
  return (
    <div className="bottomlearnsection-title-row">
      <div className="bottomlearnsection-tiny-title font-inter">
        {tinyTitle}
      </div>
      <div className="bottomlearnsection-large-heading font-kaisei">
        {largeHeading}
      </div>
    </div>
  );
}
