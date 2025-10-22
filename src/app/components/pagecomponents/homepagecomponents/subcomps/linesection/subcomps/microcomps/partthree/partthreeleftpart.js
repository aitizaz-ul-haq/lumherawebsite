export default function PartThreeLeftPart({ partThree }) {
  return (
    <div className="linesection-partone-leftpart">
      <p className="linesection-partone-tinytag font-inter">
        {partThree.tinyTag}
      </p>
      <h2 className="linesection-partone-largeheading font-kaisei">
        {partThree.largeHeading}
      </h2>
    </div>
  );
}
