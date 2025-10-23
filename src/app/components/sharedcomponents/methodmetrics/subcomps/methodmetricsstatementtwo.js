export default function MethodMetricsStatementTwo({ statementTwo }) {
  return (
    <>
      {statementTwo ? (
        <p className="heading-and-subheading-paragraph font-inter">
          {statementTwo}
        </p>
      ) : null}
    </>
  );
}
