export default function TwoParaListMiddleParaOne({ paraOne }) {
  return (
    <>
      {paraOne && (
        <p className="heading-and-paras-paragraph font-inter">{paraOne}</p>
      )}
    </>
  );
}
