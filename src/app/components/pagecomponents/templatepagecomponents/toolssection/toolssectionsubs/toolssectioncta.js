import Cta from "@/app/components/sharedcomponents/cta/cta";

export default function ToolsSectionCta({toolsCtaOne}) {
  return (
    <>
      {toolsCtaOne && (
        <Cta
          text={toolsCtaOne.text || ""}
          buttonText={toolsCtaOne.buttontext || "Get Started"}
        />
      )}
    </>
  );
}
