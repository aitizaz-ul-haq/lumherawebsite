import TwoParaListMiddle from "@/app/components/sharedcomponents/twoparalistmiddle/twoparalistmiddle";

export default function ToolsSecondSection({ toolsSecondSection }) {
  return (
    <>
      {toolsSecondSection && (
        <TwoParaListMiddle
          paraOne={toolsSecondSection.paragraphone?.content || ""}
          listItems={toolsSecondSection.middlelist || []}
          paraTwo={toolsSecondSection.paragraphtwo?.content || ""}
          paraThree={toolsSecondSection.paragraphthree?.content || ""}
          paraFour={toolsSecondSection.paragraphfour?.content || ""}
        />
      )}
    </>
  );
}
