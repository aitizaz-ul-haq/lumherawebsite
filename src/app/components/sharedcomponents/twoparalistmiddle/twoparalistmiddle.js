import TwoParaListMiddleParaOne from "./subcomps/twoparalistmiddleparaone";
import TwoParaListMiddleListItems from "./subcomps/twoparalistmiddlelistitems";
import TwoParaListMiddleParaTwo from "./subcomps/twoparalistmiddleparatwo";
import TwoParaListMiddleParaThree from "./subcomps/twoparalistmiddleparathree";
import TwoParaListMiddleParaFour from "./subcomps/twoparalistmiddleparafour";

export default function TwoParaListMiddle({
  paraOne = "",
  listItems = [],
  paraTwo = "",
  paraThree = "",
  paraFour = "",
}) {
  return (
    <div className="heading-and-paras-container">
      <TwoParaListMiddleParaOne paraOne={paraOne} />
      <TwoParaListMiddleListItems listItems={listItems} />
      <TwoParaListMiddleParaTwo paraTwo={paraTwo} />
      <TwoParaListMiddleParaThree paraThree={paraThree} />
      <TwoParaListMiddleParaFour paraFour={paraFour} />
    </div>
  );
}
