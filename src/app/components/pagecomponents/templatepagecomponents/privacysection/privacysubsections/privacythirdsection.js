import HeadingListAndParas from "@/app/components/sharedcomponents/headinglistandparas/headinglistandparas";

export default function PrivacyThirdSection({ privacyThirdSection }) {
  return (
    <>
      {privacyThirdSection && (
        <HeadingListAndParas
          heading={privacyThirdSection.heading || ""}
          paragraphOne={privacyThirdSection.paragraphone || ""}
          listItems={privacyThirdSection.middlelist || []}
          paragraphTwo={privacyThirdSection.paragraphtwo || ""}
        />
      )}
    </>
  );
}
