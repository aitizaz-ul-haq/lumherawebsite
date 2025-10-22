// components/sharedcomponents/pagetemplate/pagetemplate.jsx
import HeadingAndParas from "../headingandparas/headingandparas";
import PageHeaderSection from "./pageheadersection/pageheadersection";
import HeadingAndSubheadingWithParas from "../headingandsubheadingwithparas/headingandsubheadingwithparas";
import TwoParaListMiddle from "../twoparalistmiddle/twoparalistmiddle";
import SinglePara from "../singlepara/singlepara";
import Cta from "../cta/cta";
import HeadingAndList from "../headingandlist/headingandlist";
import HeadingListAndParas from "../headinglistandparas/headinglistandparas";
import MethodMetrics from "../methodmetrics/methodmetrics";
import QuoteSection from "../../pagecomponents/aboutpagecomponenets/quotesection/quotesection";

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
      {showAbout && aboutSection && (
        <>
          <HeadingAndParas
            heading={aboutSection.heading}
            paragraphs={aboutSection.paragraphs}
          />

          {valuesSection && (
            <HeadingAndSubheadingWithParas data={valuesSection} />
          )}

          {aboutThirdSection && (
            <QuoteSection
              quoteTextOne={aboutThirdSection.quotetextone || ""}
              quoteTextTwo={aboutThirdSection.quotetexttwo || ""}
            />
          )}

          {aboutCtaOne && (
            <Cta
              text={aboutCtaOne.text || ""}
              buttonText={aboutCtaOne.buttontext || "CONTACT US"}
            />
          )}
        </>
      )}

      {/* METHOD */}
      {showMethod && (
        <>
          {/* First: paragraphs only */}
          {methodFirstSection && (
            <HeadingAndParas
              heading=""
              paragraphs={methodFirstSection.paragraphs}
            />
          )}

          {/* Second: heading + paragraphs */}
          {methodSecondSection && (
            <HeadingAndParas
              heading={methodSecondSection.heading}
              paragraphs={methodSecondSection.paragraphs}
            />
          )}

          {/* Third: heading + paragraphs */}
          {methodThirdSection && (
            <HeadingAndParas
              heading={methodThirdSection.heading}
              paragraphs={methodThirdSection.paragraphs}
            />
          )}

          {/* Fourth: heading + paragraphOne + list + paragraphTwo */}
          {methodFourSection && (
            <HeadingListAndParas
              heading={methodFourSection.heading || ""}
              paragraphOne={methodFourSection.paragraphone || ""}
              listItems={methodFourSection.middlelist || []}
              paragraphTwo={methodFourSection.paragraphtwo || ""}
            />
          )}

          {/* Fifth: heading + paragraphs */}
          {methodFiveSection && (
            <HeadingAndParas
              heading={methodFiveSection.heading || ""}
              paragraphs={methodFiveSection.paragraphs || []}
            />
          )}

          {/* Sixth: metrics block (heading, two statements, 3 metrics, closing paragraph) */}
          {methodSixSection && (
            <MethodMetrics
              heading={methodSixSection.heading || ""}
              statementOne={methodSixSection.statementone || ""}
              statementTwo={methodSixSection.statementtwo || ""}
              metrics={methodSixSection.subsection || []}
              closingParagraph={methodSixSection.paragraph || ""}
            />
          )}

          {/* CTA */}
          {methodCtaTwo && (
            <Cta
              text={methodCtaTwo.text || ""}
              buttonText={methodCtaTwo.buttontext || "CONTACT US"}
            />
          )}
        </>
      )}

      {/* TOOLS */}
      {showTools && (
        <>
          {toolsFirstSection && (
            <HeadingAndParas
              heading={toolsFirstSection.heading || ""}
              paragraphs={toolsFirstSection.paragraphs || []}
            />
          )}
          {toolsSecondSection && (
            <TwoParaListMiddle
              paraOne={toolsSecondSection.paragraphone?.content || ""}
              listItems={toolsSecondSection.middlelist || []}
              paraTwo={toolsSecondSection.paragraphtwo?.content || ""}
            />
          )}
          {toolsThirdSection?.paragraph?.content && (
            <SinglePara text={toolsThirdSection.paragraph.content} />
          )}
          {toolsFourthSection && (
            <HeadingAndParas
              heading={toolsFourthSection.heading || ""}
              paragraphs={toolsFourthSection.paragraphs || []}
            />
          )}
          {toolsCtaOne && (
            <Cta
              text={toolsCtaOne.text || ""}
              buttonText={toolsCtaOne.buttontext || "Get Started"}
            />
          )}
        </>
      )}

      {/* LEARN */}
      {showLearn && (
        <>
          {learnFirstSection && (
            <HeadingAndParas
              heading={learnFirstSection.heading}
              paragraphs={learnFirstSection.paragraphs}
            />
          )}

          {learnSecondSection && (
            <HeadingAndList
              heading={learnSecondSection.heading || ""}
              substatement={learnSecondSection.substatement || ""}
              listItems={learnSecondSection.middlelist || []}
            />
          )}

          {learnCtaOne && (
            <Cta
              text={learnCtaOne.text || ""}
              buttonText={learnCtaOne.buttontext || "CONTACT US"}
            />
          )}

          {learnThirdSection && (
            <HeadingAndList
              heading={learnThirdSection.heading || ""}
              substatement={learnThirdSection.substatement || ""}
              listItems={learnThirdSection.middlelist || []}
            />
          )}

          {learnFourthSection && (
            <HeadingAndParas
              heading={learnFourthSection.heading || ""}
              paragraphs={learnFourthSection.paragraphs || []}
            />
          )}

          {learnCtaTwo && (
            <Cta
              text={learnCtaTwo.text || ""}
              buttonText={learnCtaTwo.buttontext || "CONTACT US"}
            />
          )}
        </>
      )}
    </div>
  );
}
