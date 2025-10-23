export default function MethodMetricsHeadingSection({ heading }) {
  return (
    <>
      {heading ? (
        <h2 className="heading-and-subheading-heading font-kaisei">
          {heading}
        </h2>
      ) : null}
    </>
  );
}
