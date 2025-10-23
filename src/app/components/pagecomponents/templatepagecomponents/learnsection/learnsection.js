import LearnFirstSection from "./learnsectionsubs/learnfirstsection";
import LearnSecondSection from "./learnsectionsubs/learnsecondsection";
import LearnCtaOne from "./learnsectionsubs/learnctaone";
import LearnThirdSection from "./learnsectionsubs/learnthirdsection";
import LearnFourthSection from "./learnsectionsubs/learnfourthsection";
import LearnCtaTwo from "./learnsectionsubs/learnctatwo";

export default function LearnSection({
  showLearn,
  learnFirstSection,
  learnSecondSection,
  learnCtaOne,
  learnThirdSection,
  learnFourthSection,
  learnCtaTwo,
}) {
  return (
    <>
      {showLearn && (
        <>
          <LearnFirstSection learnFirstSection={learnFirstSection} />
          <LearnSecondSection learnSecondSection={learnSecondSection} />
          <LearnCtaOne learnCtaOne={learnCtaOne} />
          <LearnThirdSection learnThirdSection={learnThirdSection} />
          <LearnFourthSection learnFourthSection={learnFourthSection} />
          <LearnCtaTwo learnCtaTwo={learnCtaTwo} />
        </>
      )}
    </>
  );
}
