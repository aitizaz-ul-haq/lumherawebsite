import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function PrivacyFourthSection({ privacyFourSection }) {
  return (
    <>
      {privacyFourSection && (
        <HeadingAndParas
          heading={privacyFourSection.heading || ""}
          paragraphs={privacyFourSection.paragraphs || []}
        />
      )}
    </>
  );
}
