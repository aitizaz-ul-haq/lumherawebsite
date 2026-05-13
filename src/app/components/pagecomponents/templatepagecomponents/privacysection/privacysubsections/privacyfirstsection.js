import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function PrivacyFirstSection({ privacyFirstSection }) {
  return (
    <>
      {privacyFirstSection && (
        <HeadingAndParas
          heading=""
          paragraphs={privacyFirstSection.paragraphs}
        />
      )}
    </>
  );
}
