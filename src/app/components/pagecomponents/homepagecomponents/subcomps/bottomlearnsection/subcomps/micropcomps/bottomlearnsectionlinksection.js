import Link from "next/link";
import { externalLinkProps } from "@/app/data/sitelinks";

export default function BottomLearnSectionLinkSection({card}) {
  return (
    <Link
      href={card.linkHref}
      {...externalLinkProps(card.linkHref)}
      className="linesection-partone-link-button font-inter"
      aria-label={`${card.linkText.replace(/\s*→\s*$/, "")} about ${card.heading}`}
    >
      {card.linkText}
    </Link>
  );
}
