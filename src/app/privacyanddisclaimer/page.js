// app/privacyanddisclaimer/page.jsx (server)
import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import PrivacyAndDisclaimerData from "../data/privacypolicypagedata/privacypolicypagedata.json";

const headerdata = PrivacyAndDisclaimerData.homepageheader;
const privacyFirstSection = PrivacyAndDisclaimerData.privacyfirstsection;
const privacySecondSection = PrivacyAndDisclaimerData.privacysecondsection;
const privacyThirdSection = PrivacyAndDisclaimerData.privacythirdsection;
const privacyFourSection = PrivacyAndDisclaimerData.privacyfoursection;
const privacyFiveSection = PrivacyAndDisclaimerData.privacyfivesection;
const privacySixSection = PrivacyAndDisclaimerData.privacysixsection;
const privacySevenSection = PrivacyAndDisclaimerData.privacysevensection;
const privacyEightSection = PrivacyAndDisclaimerData.privacyeightsection;
const privacyNineSection = PrivacyAndDisclaimerData.privacyninesection;

// const privacyCtaTwo        = PrivacyAndDisclaimerData.privacyctatwo;

export default function PrivacyAndDisclaimer() {
  return (
    <PageTemplate
      headerdata={headerdata}
      showImage={true}
      showPrivacy={true}
      privacyFirstSection={privacyFirstSection}
      privacySecondSection={privacySecondSection}
      privacyThirdSection={privacyThirdSection}
      privacyFourSection={privacyFourSection}
      privacyFiveSection={privacyFiveSection}
      privacySixSection={privacySixSection}
      privacySevenSection={privacySevenSection}
      privacyEightSection={privacyEightSection}
      privacyNineSection={privacyNineSection}
    />
  );
}
