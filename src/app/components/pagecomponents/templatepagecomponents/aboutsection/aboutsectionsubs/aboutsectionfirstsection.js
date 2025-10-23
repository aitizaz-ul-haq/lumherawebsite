import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function AboutSectionFirstSection({ aboutSection }) {
  return (
    <>
      <HeadingAndParas
        heading={aboutSection.heading}
        paragraphs={aboutSection.paragraphs}
      />
    </>
  );
}
