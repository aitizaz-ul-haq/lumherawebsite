import Cta from "@/app/components/sharedcomponents/cta/cta";

export default function LearnCtaTwo({ learnCtaTwo }) {
  return (
    <>
      {learnCtaTwo && (
        <Cta
          text={learnCtaTwo.text || ""}
          buttonText={learnCtaTwo.buttontext || "CONTACT US"}
        />
      )}
    </>
  );
}
