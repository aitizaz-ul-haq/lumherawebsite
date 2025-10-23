import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function LearnFirstSection({ learnFirstSection }) {
  return (
    <>
      {learnFirstSection && (
        <HeadingAndParas
          heading={learnFirstSection.heading}
          paragraphs={learnFirstSection.paragraphs}
        />
      )}
    </>
  );
}
