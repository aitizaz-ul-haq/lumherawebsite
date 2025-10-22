import Link from "next/link";

export default function RightPartLinkSection({ partOne }) {
  return (
    <Link
      href={partOne.ctaLink}
      className="linesection-partone-link-button font-inter"
    >
      {partOne.ctaText}
    </Link>
  );
}
