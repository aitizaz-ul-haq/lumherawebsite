import Image from "next/image";
import Link from "next/link";

export default function CardContainer({ cards }) {
  return (
    <div className="bottomlearnsection-card-container">
      {cards?.map((card, idx) => (
        <div className="bottomlearnsection-card" key={idx}>
          <div className="bottomlearnsection-image-container">
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              width={card.width}
              height={card.height}
              className="page-header-image"
              priority
            />
          </div>
          <div className="bottomlearnsection-card-heading font-inter">
            {card.heading}
          </div>
          <p className="bottomlearnsection-card-description font-inter">
            {card.description}
          </p>
          <Link
            href={card.linkHref}
            className="linesection-partone-link-button font-inter"
          >
            {card.linkText}
          </Link>
        </div>
      ))}
    </div>
  );
}
