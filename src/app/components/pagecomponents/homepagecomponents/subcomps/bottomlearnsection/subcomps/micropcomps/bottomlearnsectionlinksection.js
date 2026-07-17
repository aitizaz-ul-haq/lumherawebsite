import Link from "next/link";

export default function BottomLearnSectionLinkSection({card}) {
  return (
    <Link
      href={card.linkHref}
      className="linesection-partone-link-button font-inter"
      aria-label={`${card.linkText.replace(/\s*→\s*$/, "")} about ${card.heading}`}
    >
      {card.linkText}
    </Link>
  );
}
