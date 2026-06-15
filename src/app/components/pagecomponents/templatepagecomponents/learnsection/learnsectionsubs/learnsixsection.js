import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";
import HeadingAndList from "@/app/components/sharedcomponents/headingandlist/headingandlist";

export default function LearnSixSection({ learnSixSection }) {
  return (
    <>
      {learnSixSection && (
        <div
          id="for-schools"
          style={{
            scrollMarginTop: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <HeadingAndList
            heading={learnSixSection.heading || ""}
            substatement={learnSixSection.substatement || ""}
            listItems={learnSixSection.middlelist || []}
          />
          <HeadingAndParas
            // heading={learnSixSection.heading || ""}
            paragraphs={learnSixSection.paragraphs || []}
          />
        </div>
      )}
    </>
  );
}
