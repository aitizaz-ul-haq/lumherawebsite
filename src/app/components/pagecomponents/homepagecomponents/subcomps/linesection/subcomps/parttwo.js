import PartTwoLeftPart from "./microcomps/parttwo/parttwoleftpart";
import PartTwoRightPart from "./microcomps/parttwo/parttworightpart";

export default function PartTwo({ partTwo }) {
  return (
    <div className="linesection-partone-container">
      <PartTwoLeftPart partTwo={partTwo} />
      <PartTwoRightPart partTwo={partTwo} />
    </div>
  );
}
