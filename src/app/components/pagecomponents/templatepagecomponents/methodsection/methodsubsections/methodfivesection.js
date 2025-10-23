import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function MethodFiveSection({ methodFiveSection }) {
  return (
    <>
      {methodFiveSection && (
        <HeadingAndParas
          heading={methodFiveSection.heading || ""}
          paragraphs={methodFiveSection.paragraphs || []}
        />
      )}
    </>
  );
}
