// app/tools/page.jsx
import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import Toolspagedata from "../data/toolspagedata/toolspagedata.json";

const headerdata = Toolspagedata.homepageheader;
const toolsFirstSection = Toolspagedata.toolsfirstsection;
const toolsSecondSection = Toolspagedata.toolssecondsection;
const toolsThirdSection  = Toolspagedata.toolsthirdsection;
const toolsFourthSection = Toolspagedata.toolsfourthsection;
const toolsCtaOne        = Toolspagedata.toolsctaone;

export default function Tools() {
  return (
    <PageTemplate
      headerdata={headerdata}
      showImage={true}
      showTools={true}
      toolsFirstSection={toolsFirstSection}
      toolsSecondSection={toolsSecondSection}
      toolsThirdSection={toolsThirdSection}
      toolsFourthSection={toolsFourthSection}
      toolsCtaOne={toolsCtaOne}
    />
  );
}
