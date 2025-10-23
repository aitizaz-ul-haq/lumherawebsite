import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function MethodThirdSection({ methodThirdSection }) {
  return (
    <>
      {methodThirdSection && (
        <HeadingAndParas
          heading={methodThirdSection.heading}
          paragraphs={methodThirdSection.paragraphs}
        />
      )}
    </>
  );
}
