export default function MethodMetricsClosingParagraph({ closingParagraph }) {
  return (
    <>
      {closingParagraph ? (
        <p className="heading-and-subheading-paragraph font-inter">
          {closingParagraph}
        </p>
      ) : null}
    </>
  );
}
