import AccordiansSection from "./rightpartsections/accordianssection";
import PartThreeLinkSection from "./rightpartsections/partthreelinksection";

export default function PartThreeRightPart({ partThree }) {
  return (
    <div className="linesection-partone-rightpart">
      <AccordiansSection partThree={partThree} />
      <PartThreeLinkSection partThree={partThree} />
    </div>
  );
}
