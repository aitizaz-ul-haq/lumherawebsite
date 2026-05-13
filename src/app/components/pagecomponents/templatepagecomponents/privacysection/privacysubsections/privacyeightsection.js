import MethodMetrics from "@/app/components/sharedcomponents/methodmetrics/methodmetrics";

export default function PrivacyEightSection({ privacyEightSection }) {
  return (
    <>
      {privacyEightSection && (
        <MethodMetrics
          heading={privacyEightSection.heading || ""}
          statementOne={privacyEightSection.statementone || ""}
          statementTwo={privacyEightSection.statementtwo || ""}
          metrics={privacyEightSection.subsection || []}
          closingParagraph={privacyEightSection.paragraph || ""}
        />
      )}
    </>
  );
}
