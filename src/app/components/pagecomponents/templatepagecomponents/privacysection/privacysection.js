import PrivacyFirstSection from "./privacysubsections/privacyfirstsection";
import PrivacySecondSection from "./privacysubsections/privacysecondsection";
import PrivacyThirdSection from "./privacysubsections/privacythirdsection";
import PrivacyFourthSection from "./privacysubsections/privacyfourthsection";
import PrivacyFifthSection from "./privacysubsections/privacyfivesection";
import PrivacySixSection from "./privacysubsections/privacysixsection";
import PrivacySevenSection from "./privacysubsections/privacysevensection";
import PrivacyEightSection from "./privacysubsections/privacyeightsection";
import PrivacyNineSection from "./privacysubsections/privacyninesection";

export default function PrivacySection({
  showPrivacy,
  privacyFirstSection,
  privacySecondSection,
  privacyThirdSection,
  privacyFourSection,
  privacyFiveSection,
  privacySixSection,
  privacySevenSection,
  privacyEightSection,
  privacyNineSection,
}) {
  return (
    <>
      {showPrivacy && (
        <>
          {/* First: paragraphs only */}
          <PrivacyFirstSection privacyFirstSection={privacyFirstSection} />

          {/* Second: heading + paragraphs */}
          <PrivacySecondSection privacySecondSection={privacySecondSection} />

          {/* Third: heading + paragraphs */}
          <PrivacyThirdSection privacyThirdSection={privacyThirdSection} />

          {/* Fourth: heading + paragraphOne + list + paragraphTwo */}
          <PrivacyFourthSection privacyFourSection={privacyFourSection} />

          {/* Fifth: heading + paragraphs */}
          <PrivacyFifthSection privacyFiveSection={privacyFiveSection} />

          {/* Sixth: metrics block (heading, two statements, 3 metrics, closing paragraph) */}
          <PrivacySixSection privacySixSection={privacySixSection} />

          {/* Seventh: metrics block (heading, two statements, 3 metrics, closing paragraph) */}
          <PrivacySevenSection privacySevenSection={privacySevenSection} />

          {/* Eighth: metrics block (heading, two statements, 3 metrics, closing paragraph) */}
          <PrivacyEightSection privacyEightSection={privacyEightSection} />

          {/* Ninth: metrics block (heading, two statements, 3 metrics, closing paragraph) */}
          <PrivacyNineSection privacyNineSection={privacyNineSection} />
        </>
      )}
    </>
  );
}
