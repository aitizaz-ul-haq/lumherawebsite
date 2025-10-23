import MethodMetrics from "@/app/components/sharedcomponents/methodmetrics/methodmetrics";

export default function MethodSixSection({ methodSixSection }) {
  return (
    <>
      {methodSixSection && (
        <MethodMetrics
          heading={methodSixSection.heading || ""}
          statementOne={methodSixSection.statementone || ""}
          statementTwo={methodSixSection.statementtwo || ""}
          metrics={methodSixSection.subsection || []}
          closingParagraph={methodSixSection.paragraph || ""}
        />
      )}
    </>
  );
}
