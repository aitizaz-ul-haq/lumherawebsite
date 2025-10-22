import RightPartDescriptionSection from "./rightpartsections/rightpartdescirptionsection";
import RightPartAccordianSection from "./rightpartsections/rightpartaccordiansection";
import RightPartLinkSection from "./rightpartsections/rightpartlinksection";

export default function PartOneRightPart({ partOne }) {
  return (
    <div className="linesection-partone-rightpart">
      <RightPartDescriptionSection partOne={partOne} />
      <RightPartAccordianSection partOne={partOne} />
      <RightPartLinkSection partOne={partOne} />
    </div>
  );
}
