import PartOneLeftPart from "./microcomps/partone/partoneleftpart";
import PartOneRightPart from "./microcomps/partone/partonerightpart";

export default function PartOne({ partOne }) {
  return (
    <div className="linesection-partone-container">
      <PartOneRightPart partOne={partOne} />
      <PartOneLeftPart partOne={partOne} />
    </div>
  );
}
