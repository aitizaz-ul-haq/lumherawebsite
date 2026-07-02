export default function TwoParaListMiddleParaThree({ paraThree }) {
  return (
    <>
      {paraThree && (
        <p className="heading-and-paras-paragraph font-inter">{paraThree}</p>
      )}
    </>
  );
}
