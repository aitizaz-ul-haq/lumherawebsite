import Cta from "@/app/components/sharedcomponents/cta/cta";

export default function PrivacyCtaTwo({ privacyCtaTwo }) {
  return (
    <>
      {privacyCtaTwo && (
        <Cta
          text={privacyCtaTwo.text || ""}
          buttonText={privacyCtaTwo.buttontext || "CONTACT US"}
        />
      )}
    </>
  );
}
