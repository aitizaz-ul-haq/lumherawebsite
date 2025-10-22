// app/method/page.jsx (server)
import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import Methodpagedata from "../data/methodpagedata/methodpagedata.json";

const headerdata          = Methodpagedata.homepageheader;
const methodFirstSection  = Methodpagedata.methodfirstsection;
const methodSecondSection = Methodpagedata.methodsecondsection;
const methodThirdSection  = Methodpagedata.methodthirdsection;
const methodFourSection   = Methodpagedata.methodfoursection;
const methodFiveSection   = Methodpagedata.methodfivesection;
const methodSixSection    = Methodpagedata.methodsixsection;
const methodCtaTwo        = Methodpagedata.Methodctatwo;

export default function Method() {
  return (
    <PageTemplate
      headerdata={headerdata}
      showImage={true}
      showMethod={true}
      methodFirstSection={methodFirstSection}
      methodSecondSection={methodSecondSection}
      methodThirdSection={methodThirdSection}
      methodFourSection={methodFourSection}
      methodFiveSection={methodFiveSection}
      methodSixSection={methodSixSection}
      methodCtaTwo={methodCtaTwo}
    />
  );
}
