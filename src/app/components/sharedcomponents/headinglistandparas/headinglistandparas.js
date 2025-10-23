import HlpHeadingSection from "./subcomps/hlpheadingsection";
import HlpParaOne from "./subcomps/hlpparaone";
import HlpListSection from "./subcomps/hlplistsection";
import HlpParaTwo from "./subcomps/hlpparatwo";

export default function HeadingListAndParas({
  heading = "",
  paragraphOne = "",
  listItems = [],
  paragraphTwo = "",
}) {
  return (
    <div className="heading-and-paras-container">
      <HlpHeadingSection heading={heading} />
      <HlpParaOne paragraphOne={paragraphOne} />
      <HlpListSection listItems={listItems} />
      <HlpParaTwo paragraphTwo={paragraphTwo} />
    </div>
  );
}
