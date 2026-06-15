import LearnFirstSection from "./learnsectionsubs/learnfirstsection";
import LearnSecondSection from "./learnsectionsubs/learnsecondsection";
import LearnCtaOne from "./learnsectionsubs/learnctaone";
import LearnThirdSection from "./learnsectionsubs/learnthirdsection";
import LearnFourthSection from "./learnsectionsubs/learnfourthsection";
import LearnCtaTwo from "./learnsectionsubs/learnctatwo";
import LearnPageBannerSection from "./learnsectionsubs/learnpagebannersection";
import LearnFiveSection from "./learnsectionsubs/learnfivesection";
import LearnSixSection from "./learnsectionsubs/learnsixsection";
import LearnSevenSection from "./learnsectionsubs/learnsevensection";
import Learn from "@/app/learn/page";

export default function LearnSection({
  showLearn,
  learnFirstSection,
  learnSecondSection,
  learnCtaOne,
  learnThirdSection,
  learnFourthSection,
  learnCtaTwo,
  learnFiveSection,
  learnSixSection,
  learnSevenSection,
}) {
  return (
    <>
      {showLearn && (
        <>
          {/* <LearnFirstSection learnFirstSection={learnFirstSection} /> */}
          {/* <LearnSecondSection learnSecondSection={learnSecondSection} /> */}
          
          {/* <LearnThirdSection learnThirdSection={learnThirdSection} /> */}
          <LearnFourthSection learnFourthSection={learnFourthSection} />
          <LearnPageBannerSection />
          <LearnCtaOne learnCtaOne={learnCtaOne} />
          <LearnFiveSection learnFiveSection={learnFiveSection} />
          <LearnSixSection learnSixSection={learnSixSection} />
          <LearnSevenSection learnSevenSection={learnSevenSection} />
          <LearnCtaTwo learnCtaTwo={learnCtaTwo} />
        </>
      )}
    </>
  );
}
