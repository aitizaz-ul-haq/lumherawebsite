// import HeadingAndList from "@/app/components/sharedcomponents/headingandlist/headingandlist";
import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function LearnThirdSection({ learnThirdSection }) {
  return (
    <>
      {learnThirdSection && (
        // <HeadingAndList
        //   heading={learnThirdSection.heading || ""}
        //   substatement={learnThirdSection.substatement || ""}
        //   listItems={learnThirdSection.middlelist || []}
        // />
        <HeadingAndParas
          heading={learnThirdSection.heading}
          paragraphs={learnThirdSection.paragraphs}
        />
      )}
    </>
  );
}
