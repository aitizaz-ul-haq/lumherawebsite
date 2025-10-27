import BottomLearnSectionImageContainer from "./bottomlearnsectionimagecontainer";
import BottomLearnSectionCardHeading from "./bottomlearnsectioncardheading";
import BottomLearnSectionCardDescription from "./bottomlearnsectioncarddescription";
import BottomLearnSectionLinkSection from "./bottomlearnsectionlinksection";

export default function CardsSection({ cards }) {
  return (
    <>
      {cards?.map((card, idx) => (
        <div className="bottomlearnsection-card" key={idx}>
          <BottomLearnSectionImageContainer card={card} />
          <BottomLearnSectionCardHeading card={card} />
          <BottomLearnSectionCardDescription card={card} />
          <BottomLearnSectionLinkSection card={card} />
        </div>
      ))}
    </>
  );
}
