import HeadingAndList from "@/app/components/sharedcomponents/headingandlist/headingandlist";

export default function LearnThirdSection({ learnThirdSection }) {
  return (
    <>
      {learnThirdSection && (
        <HeadingAndList
          heading={learnThirdSection.heading || ""}
          substatement={learnThirdSection.substatement || ""}
          listItems={learnThirdSection.middlelist || []}
        />
      )}
    </>
  );
}
