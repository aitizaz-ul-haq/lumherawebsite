import HeadingListAndParas from "@/app/components/sharedcomponents/headinglistandparas/headinglistandparas";

export default function MethodFourthSection({ methodFourSection }) {
  return (
    <>
      {methodFourSection && (
        <HeadingListAndParas
          heading={methodFourSection.heading || ""}
          paragraphOne={methodFourSection.paragraphone || ""}
          listItems={methodFourSection.middlelist || []}
          paragraphTwo={methodFourSection.paragraphtwo || ""}
        />
      )}
    </>
  );
}
