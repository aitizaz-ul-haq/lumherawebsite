import Cta from "@/app/components/sharedcomponents/cta/cta";

export default function LearnCtaOne({ learnCtaOne }) {
  return (
    <>
      {learnCtaOne && (
        <Cta
          text={learnCtaOne.text || ""}
          buttonText={learnCtaOne.buttontext || "CONTACT US"}
        />
      )}
    </>
  );
}
