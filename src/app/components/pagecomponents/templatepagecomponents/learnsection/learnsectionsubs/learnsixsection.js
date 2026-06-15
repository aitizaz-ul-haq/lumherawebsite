import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";
import HeadingAndList from "@/app/components/sharedcomponents/headingandlist/headingandlist";

export default function LearnSixSection({ learnSixSection }) {
  return (
    <>
      {learnSixSection && (
        <>
          <HeadingAndList
            heading={learnSixSection.heading || ""}
            substatement={learnSixSection.substatement || ""}
            listItems={learnSixSection.middlelist || []}
          />
          <HeadingAndParas
            // heading={learnSixSection.heading || ""}
            paragraphs={learnSixSection.paragraphs || []}
          />
        </>
      )}
    </>
  );
}
