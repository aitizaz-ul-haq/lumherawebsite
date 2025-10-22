// app/about/page.jsx (server)
import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import Aboutpagedata from "../data/aboutpagedata/aboutpagedata.json";

const headerdata        = Aboutpagedata.homepageheader;
const aboutSection      = Aboutpagedata.aboutfirstsection;
const valuesSection     = Aboutpagedata.aboutsecondsection;
const aboutThirdSection = Aboutpagedata.aboutthirdsection; // NEW
const aboutCtaOne       = Aboutpagedata.aboutctaone;       // NEW

export default function About() {
  return (
    <PageTemplate
      headerdata={headerdata}
      showImage={true}
      showAbout={true}
      aboutSection={aboutSection}
      valuesSection={valuesSection}
      aboutThirdSection={aboutThirdSection} // NEW
      aboutCtaOne={aboutCtaOne}             // NEW
    />
  );
}
