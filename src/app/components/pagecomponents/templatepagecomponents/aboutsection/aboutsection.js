import AboutSectionFirstSection from "./aboutsectionsubs/aboutsectionfirstsection";
import AboutValueSection from "./aboutsectionsubs/aboutvaluesection";
import AboutThirdSection from "./aboutsectionsubs/aboutthirdsection";
import AboutCtaSection from "./aboutsectionsubs/aboutctasection";

export default function AboutSection({
  showAbout,
  aboutSection,
  valuesSection,
  aboutThirdSection,
  aboutCtaOne,
}) {
  return (
    <>
      {showAbout && aboutSection && (
        <>
          <AboutSectionFirstSection aboutSection={aboutSection} />
          <AboutValueSection valuesSection={valuesSection} />
          <AboutThirdSection aboutThirdSection={aboutThirdSection} />
          <AboutCtaSection aboutCtaOne={aboutCtaOne} />
        </>
      )}
    </>
  );
}
