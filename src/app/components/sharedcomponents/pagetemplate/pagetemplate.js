import PageHeaderSection from "./pageheadersection/pageheadersection";
import AboutSection from "../../pagecomponents/templatepagecomponents/aboutsection/aboutsection";
import MethodSection from "../../pagecomponents/templatepagecomponents/methodsection/methodsection";
import ToolsSection from "../../pagecomponents/templatepagecomponents/toolssection/toolssection";
import LearnSection from "../../pagecomponents/templatepagecomponents/learnsection/learnsection";
import PrivacySection from "../../pagecomponents/templatepagecomponents/privacysection/privacysection";

import "./styles/pagetemplate.css";

export default function PageTemplate({
  // Header
  headerdata,
  showImage = true,

  // About
  showAbout = false,
  aboutSection = null,
  valuesSection = null,
  aboutThirdSection = null, // ← NEW
  aboutCtaOne = null, // ← NEW

  // Method
  showMethod = false,
  methodFirstSection = null,
  methodSecondSection = null,
  methodThirdSection = null,
  methodFourSection = null,
  methodFiveSection = null,
  methodSixSection = null,
  methodCtaTwo = null,

  // Tools
  showTools = false,
  toolsFirstSection = null,
  toolsSecondSection = null,
  toolsThirdSection = null,
  toolsFourthSection = null,
  toolsCtaOne = null,

  // Learn
  showLearn = false,
  learnFirstSection = null,
  learnSecondSection = null,
  learnCtaOne = null,
  learnThirdSection = null,
  learnFourthSection = null,
  learnFiveSection = null,
  learnSixSection = null,
  learnSevenSection = null,
  learnCtaTwo = null,

  // Privacy
  showPrivacy = false,
  privacyFirstSection = null,
  privacySecondSection = null,
  privacyThirdSection = null,
  privacyFourSection = null,
  privacyFiveSection = null,
  privacySixSection = null,
  privacySevenSection = null,
  privacyEightSection = null,
  privacyNineSection = null,

}) {
  return (
    <div className="page-container">
      {/* PAGE HEADER */}
      <PageHeaderSection
        tinytitle={headerdata?.tinytitle || ""}
        largeheading={headerdata?.LargeHeading || ""}
        showImage={showImage}
      />

      {/* ABOUT */}
      <AboutSection
        showAbout={showAbout}
        aboutSection={aboutSection}
        valuesSection={valuesSection}
        aboutThirdSection={aboutThirdSection}
        aboutCtaOne={aboutCtaOne}
      />

      {/* METHOD */}
      <MethodSection
        showMethod={showMethod}
        methodFirstSection={methodFirstSection}
        methodSecondSection={methodSecondSection}
        methodThirdSection={methodThirdSection}
        methodFourSection={methodFourSection}
        methodFiveSection={methodFiveSection}
        methodSixSection={methodSixSection}
        methodCtaTwo={methodCtaTwo}
      />

      {/* TOOLS */}
      <ToolsSection
        showTools={showTools}
        toolsFirstSection={toolsFirstSection}
        toolsSecondSection={toolsSecondSection}
        toolsThirdSection={toolsThirdSection}
        toolsFourthSection={toolsFourthSection}
        toolsCtaOne={toolsCtaOne}
      />

      {/* LEARN */}
      <LearnSection
        showLearn={showLearn}
        learnFirstSection={learnFirstSection}
        learnSecondSection={learnSecondSection}
        learnCtaOne={learnCtaOne}
        learnThirdSection={learnThirdSection}
        learnFourthSection={learnFourthSection}
        learnFiveSection={learnFiveSection}
        learnSixSection={learnSixSection}
        learnSevenSection={learnSevenSection}
        learnCtaTwo={learnCtaTwo}
      />

      {/* PRIVACY */}
      <PrivacySection
        showPrivacy={showPrivacy}
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
    </div>
  );
}
