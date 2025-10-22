export default function PartOneLeftPart({ partOne }) {
  return (
    <div className="linesection-partone-leftpart">
      <p className="linesection-partone-tinytag font-inter">
        {partOne.tinyTag}
      </p>
      <h2 className="linesection-partone-largeheading font-kaisei">
        {partOne.largeHeading}
      </h2>
    </div>
  );
}
