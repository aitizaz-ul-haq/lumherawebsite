import SinglePara from "@/app/components/sharedcomponents/singlepara/singlepara";

export default function ToolsThirdSection({ toolsThirdSection }) {
  return (
    <>
      {toolsThirdSection?.paragraph?.content && (
        <SinglePara text={toolsThirdSection.paragraph.content} />
      )}
    </>
  );
}
