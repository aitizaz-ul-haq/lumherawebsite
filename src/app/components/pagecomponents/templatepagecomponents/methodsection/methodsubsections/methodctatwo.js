import Cta from "@/app/components/sharedcomponents/cta/cta";

export default function MethodCtaTwo({ methodCtaTwo }) {
  return (
    <>
      {methodCtaTwo && (
        <Cta
          text={methodCtaTwo.text || ""}
          buttonText={methodCtaTwo.buttontext || "CONTACT US"}
        />
      )}
    </>
  );
}
