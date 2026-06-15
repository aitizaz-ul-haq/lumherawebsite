import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";
import HeadingAndList from "@/app/components/sharedcomponents/headingandlist/headingandlist";

export default function LearnFourthSection({ learnFourthSection }) {
  return (
    <>
      {learnFourthSection && (
        <>
          <HeadingAndList
            heading={learnFourthSection.heading || ""}
            substatement={learnFourthSection.substatement || ""}
            listItems={learnFourthSection.middlelist || []}
          />
          <HeadingAndParas
            // heading={learnFourthSection.heading || ""}
            paragraphs={learnFourthSection.paragraphs || []}
          />
        </>
      )}
    </>
  );
}
