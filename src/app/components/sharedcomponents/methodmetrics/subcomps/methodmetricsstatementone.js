export default function MethodMetricsStatementOne({ statementOne }) {
  return (
    <>
      {statementOne ? (
        <p className="heading-and-subheading-paragraph font-inter">
          {statementOne}
        </p>
      ) : null}
    </>
  );
}
