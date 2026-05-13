import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function PrivacyFiveSection({ privacyFiveSection }) {
  return (
    <>
      {privacyFiveSection && (
        <HeadingAndParas
          heading={privacyFiveSection.heading || ""}
          paragraphs={privacyFiveSection.paragraphs || []}
        />
      )}
    </>
  );
}
