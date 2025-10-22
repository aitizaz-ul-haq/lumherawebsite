export default function PartTwoRightPart({ partTwo }) {
  return (
    <div className="linesection-partone-rightpart">
      <p className="linesection-partone-tinytag font-inter">
        {partTwo.rightTinyTag}
      </p>
      <h2 className="linesection-partone-largeheading font-kaisei">
        {partTwo.rightLargeHeading}
      </h2>
    </div>
  );
}
