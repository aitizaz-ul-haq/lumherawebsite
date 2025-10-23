import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function LearnFourthSection({ learnFourthSection }) {
  return (
    <>
      {learnFourthSection && (
        <HeadingAndParas
          heading={learnFourthSection.heading || ""}
          paragraphs={learnFourthSection.paragraphs || []}
        />
      )}
    </>
  );
}
