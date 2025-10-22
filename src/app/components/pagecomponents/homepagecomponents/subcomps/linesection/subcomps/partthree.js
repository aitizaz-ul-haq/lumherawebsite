import PartThreeLeftPart from "./microcomps/partthree/partthreeleftpart";
import PartThreeRightPart from "./microcomps/partthree/partthreerightpart";

export default function PartThree({ partThree }) {
  return (
    <div className="linesection-partone-container">
      <PartThreeLeftPart partThree={partThree} />
      <PartThreeRightPart partThree={partThree} />
    </div>
  );
}
