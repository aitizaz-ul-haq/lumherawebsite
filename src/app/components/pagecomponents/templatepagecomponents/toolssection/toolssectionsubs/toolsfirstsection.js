import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function ToolsFirstSection({ toolsFirstSection }) {
  return (
    <>
      {toolsFirstSection && (
        <HeadingAndParas
          heading={toolsFirstSection.heading || ""}
          paragraphs={toolsFirstSection.paragraphs || []}
        />
      )}
    </>
  );
}
