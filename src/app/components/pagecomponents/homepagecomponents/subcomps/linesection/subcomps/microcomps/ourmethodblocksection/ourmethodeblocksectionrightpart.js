import Link from "next/link";

export default function OurMehodBlockSectionRightPart({ block }) {
  return (
    <div className="linesection-partone-rightpart">
      {block.side === "right" && (
        <div className="middle-case">
          <h4 className="methodesection-subheading font-inter">
            {block.subheading}
          </h4>
          {block.paragraphs?.map((p, i) => (
            <p className="linesection-partone-description font-inter" key={i}>
              {p}
            </p>
          ))}
          <Link
            href={block.ctaLink}
            className="linesection-partone-link-button font-inter"
          >
            {block.ctaText}
          </Link>
        </div>
      )}
    </div>
  );
}
