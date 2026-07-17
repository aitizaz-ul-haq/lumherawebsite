import Link from "next/link";

export default function RightPartLinkSection({ partOne }) {
  return (
    <Link
      href={partOne.ctaLink}
      className="linesection-partone-link-button font-inter"
      aria-label="Learn more about Lumhera's approach"
    >
      {partOne.ctaText}
    </Link>
  );
}
