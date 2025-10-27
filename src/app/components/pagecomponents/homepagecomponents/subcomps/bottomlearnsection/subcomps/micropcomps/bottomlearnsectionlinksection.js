import Link from "next/link";

export default function BottomLearnSectionLinkSection({card}) {
  return (
    <Link
      href={card.linkHref}
      className="linesection-partone-link-button font-inter"
    >
      {card.linkText}
    </Link>
  );
}
