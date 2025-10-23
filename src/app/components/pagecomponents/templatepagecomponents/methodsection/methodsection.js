import MethodFirstSection from "./methodsubsections/methodfirstsection";
import MethodSecondSection from "./methodsubsections/methodsecondsection";
import MethodThirdSection from "./methodsubsections/methodthirdsection";
import MethodFourthSection from "./methodsubsections/methodfourthsection";
import MethodFiveSection from "./methodsubsections/methodfivesection";
import MethodSixSection from "./methodsubsections/methodsixsection";
import MethodCtaTwo from "./methodsubsections/methodctatwo";

export default function MethodSection({
  showMethod,
  methodFirstSection,
  methodSecondSection,
  methodThirdSection,
  methodFourSection,
  methodFiveSection,
  methodSixSection,
  methodCtaTwo,
}) {
  return (
    <>
      {showMethod && (
        <>
          {/* First: paragraphs only */}
          <MethodFirstSection methodFirstSection={methodFirstSection} />

          {/* Second: heading + paragraphs */}
          <MethodSecondSection methodSecondSection={methodSecondSection} />

          {/* Third: heading + paragraphs */}
          <MethodThirdSection methodThirdSection={methodThirdSection} />

          {/* Fourth: heading + paragraphOne + list + paragraphTwo */}
          <MethodFourthSection methodFourSection={methodFourSection} />

          {/* Fifth: heading + paragraphs */}
          <MethodFiveSection methodFiveSection={methodFiveSection} />

          {/* Sixth: metrics block (heading, two statements, 3 metrics, closing paragraph) */}
          <MethodSixSection methodSixSection={methodSixSection} />

          {/* CTA */}
          <MethodCtaTwo methodCtaTwo={methodCtaTwo} />
        </>
      )}
    </>
  );
}
