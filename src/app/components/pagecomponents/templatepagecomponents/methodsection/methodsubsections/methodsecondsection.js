import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function MethodSecondSection({ methodSecondSection }) {
  return (
    <>
      {methodSecondSection && (
        <HeadingAndParas
          heading={methodSecondSection.heading}
          paragraphs={methodSecondSection.paragraphs}
        />
      )}
    </>
  );
}
