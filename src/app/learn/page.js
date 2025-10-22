// app/learn/page.jsx
import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import Learnpagedata from "../data/learnpagedata/learnpagedata.json";

const headerdata       = Learnpagedata.homepageheader;
const learnFirstSection = Learnpagedata.learnfirstsection;
const learnSecondSection = Learnpagedata.learnsecondsection;
const learnCtaOne       = Learnpagedata.learnctaone;
const learnThirdSection = Learnpagedata.learnthirdsection;
const learnFourthSection = Learnpagedata.learnfourthsection;
const learnCtaTwo       = Learnpagedata.learnctatwo;

export default function Learn() {
  return (
    <PageTemplate
      headerdata={headerdata}
      showImage={true}
      showLearn={true}
      learnFirstSection={learnFirstSection}
      learnSecondSection={learnSecondSection}
      learnCtaOne={learnCtaOne}
      learnThirdSection={learnThirdSection}
      learnFourthSection={learnFourthSection}
      learnCtaTwo={learnCtaTwo}
    />
  );
}
