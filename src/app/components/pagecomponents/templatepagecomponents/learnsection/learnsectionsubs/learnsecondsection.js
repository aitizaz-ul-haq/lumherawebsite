import HeadingAndList from "@/app/components/sharedcomponents/headingandlist/headingandlist";
import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function LearnSecondSection({ learnSecondSection }) {
  return (
    <>
      {learnSecondSection && (
        <>
          <HeadingAndList
            heading={learnSecondSection.heading || ""}
            substatement={learnSecondSection.substatement || ""}
            listItems={learnSecondSection.middlelist || []}
          />
          <HeadingAndParas
            // heading={learnSecondSection.heading}
            paragraphs={learnSecondSection.paragraphs}
          />
        </>
      )}
    </>
  );
}
