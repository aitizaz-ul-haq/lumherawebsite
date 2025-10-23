export default function HlpParaTwo({ paragraphTwo }) {
  return (
    <>
      {paragraphTwo ? (
        <p className="heading-and-paras-paragraph font-inter">{paragraphTwo}</p>
      ) : null}
    </>
  );
}
