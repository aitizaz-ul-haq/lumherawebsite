import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";
import HeadingAndList from "@/app/components/sharedcomponents/headingandlist/headingandlist";

export default function LearnFiveSection({ learnFiveSection }) {
  return (
    <>
      {learnFiveSection && (
        <>
          <HeadingAndList
            heading={learnFiveSection.heading || ""}
            substatement={learnFiveSection.substatement || ""}
            listItems={learnFiveSection.middlelist || []}
          />
          <HeadingAndParas
            // heading={learnFiveSection.heading || ""}
            paragraphs={learnFiveSection.paragraphs || []}
          />
        </>
      )}
    </>
  );
}
