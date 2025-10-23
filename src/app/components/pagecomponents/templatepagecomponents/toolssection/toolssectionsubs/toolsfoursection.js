import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function ToolsFourSection({ toolsFourthSection }) {
  return (
    <>
      {toolsFourthSection && (
        <HeadingAndParas
          heading={toolsFourthSection.heading || ""}
          paragraphs={toolsFourthSection.paragraphs || []}
        />
      )}
    </>
  );
}
