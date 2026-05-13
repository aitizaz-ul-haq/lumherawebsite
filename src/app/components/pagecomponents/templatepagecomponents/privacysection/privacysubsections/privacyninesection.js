import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function PrivacyNineSection({ privacyNineSection }) {
  return (
    <>
      {privacyNineSection && (
       <HeadingAndParas
                 heading={privacyNineSection.heading || ""}
                 paragraphs={privacyNineSection.paragraphs || []}
               />
      )}
    </>
  );
}
