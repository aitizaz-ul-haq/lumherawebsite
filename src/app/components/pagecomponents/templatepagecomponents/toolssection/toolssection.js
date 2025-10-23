import ToolsFirstSection from "./toolssectionsubs/toolsfirstsection";
import ToolsSecondSection from "./toolssectionsubs/toolssecondsection";
import ToolsThirdSection from "./toolssectionsubs/toolsthirdsection";
import ToolsFourSection from "./toolssectionsubs/toolsfoursection";
import ToolsSectionCta from "./toolssectionsubs/toolssectioncta";

export default function ToolsSection({
  showTools,
  toolsFirstSection,
  toolsSecondSection,
  toolsThirdSection,
  toolsFourthSection,
  toolsCtaOne,
}) {
  return (
    <>
      {showTools && (
        <>
          <ToolsFirstSection toolsFirstSection={toolsFirstSection} />
          <ToolsSecondSection toolsSecondSection={toolsSecondSection} />
          <ToolsThirdSection toolsThirdSection={toolsThirdSection} />
          <ToolsFourSection toolsFourthSection={toolsFourthSection} />
          <ToolsSectionCta toolsCtaOne={toolsCtaOne} />
        </>
      )}
    </>
  );
}
