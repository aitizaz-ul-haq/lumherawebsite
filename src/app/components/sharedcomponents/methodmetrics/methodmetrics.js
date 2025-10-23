import MethodMetricsHeadingSection from "./subcomps/methodmetricsheadingsection";
import MethodMetricsStatementOne from "./subcomps/methodmetricsstatementone";
import MethodMetricsStatementTwo from "./subcomps/methodmetricsstatementtwo";
import MethodMetricsMetricsSection from "./subcomps/methodmetricsmetricssection";
import MethodMetricsClosingParagraph from "./subcomps/methodmetricsclosingparagraph";

export default function MethodMetrics({
  heading = "",
  statementOne = "",
  statementTwo = "",
  metrics = [], // [{id, subheading, content}]
  closingParagraph = "",
}) {
  return (
    <div className="heading-and-subheading-with-paras-container">
      <MethodMetricsHeadingSection heading={heading} />
      <MethodMetricsStatementOne statementOne={statementOne} />
      <MethodMetricsStatementTwo statementTwo={statementTwo} />
      <MethodMetricsMetricsSection metrics={metrics} />
      <MethodMetricsClosingParagraph closingParagraph={closingParagraph} />
    </div>
  );
}
