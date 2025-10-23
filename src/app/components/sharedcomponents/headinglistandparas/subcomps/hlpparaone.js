export default function HlpParaOne({ paragraphOne }) {
  return (
    <>
      {paragraphOne ? (
        <p className="heading-and-paras-paragraph font-inter">{paragraphOne}</p>
      ) : null}
    </>
  );
}
