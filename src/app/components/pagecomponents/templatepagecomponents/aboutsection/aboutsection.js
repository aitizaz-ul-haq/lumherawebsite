import AboutSectionFirstSection from "./aboutsectionsubs/aboutsectionfirstsection";
import AboutValueSection from "./aboutsectionsubs/aboutvaluesection";
import AboutThirdSection from "./aboutsectionsubs/aboutthirdsection";
import AboutCtaSection from "./aboutsectionsubs/aboutctasection";
import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function AboutSection({
  showAbout,
  aboutSection,
  valuesSection,
  aboutThirdSection,
  aboutCtaOne,
  aboutParentCompany,
}) {
  return (
    <>
      {showAbout && aboutSection && (
        <>
          <AboutSectionFirstSection aboutSection={aboutSection} />
          <AboutValueSection valuesSection={valuesSection} />
          <AboutThirdSection aboutThirdSection={aboutThirdSection} />
          <AboutCtaSection aboutCtaOne={aboutCtaOne} />
          {aboutParentCompany && (
            <HeadingAndParas
              paragraphs={aboutParentCompany.paragraphs}
            />
          )}
        </>
      )}
    </>
  );
}
