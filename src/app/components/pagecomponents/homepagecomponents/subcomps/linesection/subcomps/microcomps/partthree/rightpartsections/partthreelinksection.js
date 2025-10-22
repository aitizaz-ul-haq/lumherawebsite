import Link from "next/link";

export default function PartThreeLinkSection({ partThree }) {
  return (
    <Link
      href={partThree.ctaLink}
      className="linesection-partone-link-button font-inter"
    >
      {partThree.ctaText}
    </Link>
  );
}
