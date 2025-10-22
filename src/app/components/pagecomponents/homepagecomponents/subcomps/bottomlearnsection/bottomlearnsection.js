
import "./styles/bottomlearnsection.css";

import TitleRow from "./subcomps/titlerow";
import CardContainer from "./subcomps/cardcontainer";

export default function BottomLearnSection({ tinyTitle, largeHeading, cards }) {
  return (
    <div className="bottomlearnsection-container">
      <TitleRow tinyTitle={tinyTitle} largeHeading={largeHeading} />
      <CardContainer cards={cards} />
    </div>
  );
}
