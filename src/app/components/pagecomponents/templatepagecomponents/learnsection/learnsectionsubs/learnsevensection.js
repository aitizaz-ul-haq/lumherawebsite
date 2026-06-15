import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";
import HeadingAndList from "@/app/components/sharedcomponents/headingandlist/headingandlist";

export default function LearnSevenSection({ learnSevenSection }) {
  return (
    <>
      {learnSevenSection && (
        <div
          id="looking-ahead"
          style={{
            scrollMarginTop: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <HeadingAndList
            heading={learnSevenSection.heading || ""}
            substatement={learnSevenSection.substatement || ""}
            listItems={learnSevenSection.middlelist || []}
          />
          <HeadingAndParas
            // heading={learnSevenSection.heading || ""}
            paragraphs={learnSevenSection.paragraphs || []}
          />
        </div>
      )}
    </>
  );
}
