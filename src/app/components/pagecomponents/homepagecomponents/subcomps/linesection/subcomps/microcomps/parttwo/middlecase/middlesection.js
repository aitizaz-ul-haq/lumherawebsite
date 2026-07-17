import Link from "next/link";

export default function MiddleSection({ partTwo }) {
  return (
    <div className="middle-case">
      {partTwo.leftParagraphs?.map((p, idx) => (
        <p className="linesection-partone-description font-inter" key={idx}>
          {p}
        </p>
      ))}
      <Link
        href={partTwo.ctaLink}
        className="linesection-partone-link-button font-inter"
        aria-label={`Learn more about ${partTwo.rightLargeHeading || "Esther the Investor"}`}
      >
        {partTwo.ctaText}
      </Link>
    </div>
  );
}
