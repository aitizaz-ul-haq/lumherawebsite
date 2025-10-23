export default function MethodMetricsMetricsSection({ metrics }) {
  return (
    <>
      {Array.isArray(metrics) &&
        metrics.map((m) => (
          <div key={m.id ?? m.subheading}>
            {m?.subheading ? (
              <h3 className="heading-and-subheading-subheading font-kaisei">
                {m.subheading}
              </h3>
            ) : null}
            {m?.content ? (
              <p className="heading-and-subheading-paragraph font-inter">
                {m.content}
              </p>
            ) : null}
          </div>
        ))}
    </>
  );
}
