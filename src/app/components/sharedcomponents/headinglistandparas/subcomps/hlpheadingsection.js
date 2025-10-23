export default function HlpHeadingSection({ heading }) {
  return (
    <>
      {heading ? (
        <h2 className="heading-and-paras-heading font-kaisei">{heading}</h2>
      ) : null}
    </>
  );
}
