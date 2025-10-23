export default function TwoParaListMiddleParaTwo({ paraTwo }) {
  return (
    <>
      {paraTwo && (
        <p className="heading-and-paras-paragraph font-inter">{paraTwo}</p>
      )}
    </>
  );
}
