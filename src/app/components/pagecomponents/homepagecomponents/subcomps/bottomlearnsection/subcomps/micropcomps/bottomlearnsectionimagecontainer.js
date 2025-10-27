import Image from "next/image";

export default function BottomLearnSectionImageContainer({card}) {
  return (
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
  );
}
