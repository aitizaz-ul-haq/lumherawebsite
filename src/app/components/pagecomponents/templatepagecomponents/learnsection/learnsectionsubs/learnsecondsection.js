import HeadingAndList from "@/app/components/sharedcomponents/headingandlist/headingandlist";

export default function LearnSecondSection({ learnSecondSection }) {
  return (
    <>
      {learnSecondSection && (
        <HeadingAndList
          heading={learnSecondSection.heading || ""}
          substatement={learnSecondSection.substatement || ""}
          listItems={learnSecondSection.middlelist || []}
        />
      )}
    </>
  );
}
