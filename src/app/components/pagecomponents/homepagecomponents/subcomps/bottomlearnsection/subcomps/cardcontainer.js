import CardsSection from "./micropcomps/cardssection";

export default function CardContainer({ cards }) {
  return (
    <div className="bottomlearnsection-card-container">
      <CardsSection cards={cards} />
    </div>
  );
}
