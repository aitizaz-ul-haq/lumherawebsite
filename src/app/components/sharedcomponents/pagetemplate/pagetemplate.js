import PageHeaderSection from "./pageheadersection/pageheadersection";
import AboutSection from "../../pagecomponents/templatepagecomponents/aboutsection/aboutsection";
import MethodSection from "../../pagecomponents/templatepagecomponents/methodsection/methodsection";
import ToolsSection from "../../pagecomponents/templatepagecomponents/toolssection/toolssection";
import LearnSection from "../../pagecomponents/templatepagecomponents/learnsection/learnsection";

import "./styles/pagetemplate.css";

export default function PageTemplate({
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
  learnCtaTwo = null,
}) {
  return (
    <div className="page-container">
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
        learnCtaTwo={learnCtaTwo}
      />
    </div>
  );
}
