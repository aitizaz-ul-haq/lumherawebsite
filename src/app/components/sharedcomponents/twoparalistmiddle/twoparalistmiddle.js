import TwoParaListMiddleParaOne from "./subcomps/twoparalistmiddleparaone";
import TwoParaListMiddleListItems from "./subcomps/twoparalistmiddlelistitems";
import TwoParaListMiddleParaTwo from "./subcomps/twoparalistmiddleparatwo";

export default function TwoParaListMiddle({
  paraOne = "",
  listItems = [],
  paraTwo = "",
}) {
  return (
    <div className="heading-and-paras-container">
      <TwoParaListMiddleParaOne paraOne={paraOne} />
      <TwoParaListMiddleListItems listItems={listItems} />
      <TwoParaListMiddleParaTwo paraTwo={paraTwo} />
    </div>
  );
}
