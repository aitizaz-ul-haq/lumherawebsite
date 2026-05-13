import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function PrivacySevenSection({ privacySevenSection }) {
  return (
    <>
      {privacySevenSection && (
        <HeadingAndParas
          heading={privacySevenSection.heading || ""}
          paragraphs={privacySevenSection.paragraphs || []}
        />
      )}
    </>
  );
}
