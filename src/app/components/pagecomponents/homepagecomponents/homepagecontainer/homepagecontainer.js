import "./styles/homepagecontainer.css";

import LineSection from "../subcomps/linesection/linesection";
import BottomLearnSection from "../subcomps/bottomlearnsection/bottomlearnsection";

export default function HomePageContainer({
  lineSectionData,
  bottomLearnSectionData
}) {
  return (
    <div className="main-page-container">
      <LineSection
        partOne={lineSectionData.partOne}
        partTwo={lineSectionData.partTwo}
        partThree={lineSectionData.partThree}
        ourMethod={lineSectionData.ourMethod}
      />

      <BottomLearnSection
        tinyTitle={bottomLearnSectionData.tinyTitle}
        largeHeading={bottomLearnSectionData.largeHeading}
        cards={bottomLearnSectionData.cards}
      />
    </div>
  );
}
