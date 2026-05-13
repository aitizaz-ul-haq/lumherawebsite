import HeadingListAndParas from "@/app/components/sharedcomponents/headinglistandparas/headinglistandparas";

export default function PrivacySecondSection({ privacySecondSection }) {
  return (
    <>
      {privacySecondSection && (
        <HeadingListAndParas
          heading={privacySecondSection.heading || ""}
          paragraphOne={privacySecondSection.paragraphone || ""}
          listItems={privacySecondSection.middlelist || []}
          paragraphTwo={privacySecondSection.paragraphtwo || ""}
        />
      )}
    </>
  );
}
