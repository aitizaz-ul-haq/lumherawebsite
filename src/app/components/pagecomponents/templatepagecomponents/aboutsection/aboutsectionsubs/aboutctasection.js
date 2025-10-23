import Cta from "@/app/components/sharedcomponents/cta/cta";

export default function AboutCtaSection({ aboutCtaOne }) {
  return (
    <>
      {aboutCtaOne && (
        <Cta
          text={aboutCtaOne.text || ""}
          buttonText={aboutCtaOne.buttontext || "CONTACT US"}
        />
      )}
    </>
  );
}
