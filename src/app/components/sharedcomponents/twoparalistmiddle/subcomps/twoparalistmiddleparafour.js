export default function TwoParaListMiddleParaFour({ paraFour }) {
  return (
    <>
      {paraFour && (
        <p className="heading-and-paras-paragraph font-inter">{paraFour}</p>
      )}
    </>
  );
}
