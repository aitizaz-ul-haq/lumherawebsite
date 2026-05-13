import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function PrivacySixSection({ privacySixSection }) {
  return (
    <>
      {privacySixSection && (
       <HeadingAndParas
                 heading={privacySixSection.heading || ""}
                 paragraphs={privacySixSection.paragraphs || []}
               />
      )}
    </>
  );
}
