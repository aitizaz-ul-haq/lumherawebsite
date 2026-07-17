import Link from "next/link";

export default function PartThreeLinkSection({ partThree }) {
  return (
    <Link
      href={partThree.ctaLink}
      className="linesection-partone-link-button font-inter"
      aria-label={`Learn more about ${partThree.largeHeading || "Lumhera's values"}`}
    >
      {partThree.ctaText}
    </Link>
  );
}
