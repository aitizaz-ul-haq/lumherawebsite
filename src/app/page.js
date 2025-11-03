import MainHeroSection from "./components/sharedcomponents/mainherosection/mainherosection";
import HomePageContainer from "./components/pagecomponents/homepagecomponents/homepagecontainer/homepagecontainer";

// ✅ point to the new JSON file (fix the old typo in path/name)
import Homepagedata from "./data/homepagedata/homaepagedata.json";

// --Hero section data----------------------------------
const herotitle = Homepagedata.herosection.herotitle;
const herotitlesize = Homepagedata.herosection.herotitlesize;
const herobackgroundimage = Homepagedata.herosection.backgroundImages;
const herotitlewidth = Homepagedata.herosection.herotitlewidth;
const heroparaone = Homepagedata.herosection.heroparaone;
const heroparatwo = Homepagedata.herosection.heroparatwo;
const heroparathree = Homepagedata.herosection.heroparathree;

// --Homepage sections data-----------------------------
const lineSectionData = Homepagedata.lineSection;
const bottomLearnSectionData = Homepagedata.bottomLearnSection;

export default function Home() {
  return (
    <>
      <MainHeroSection
        herotitle={herotitle}
        herobackgroundimage={herobackgroundimage}
        herotitlesize={herotitlesize}
        herotitlewidth={herotitlewidth}
        heroparaone={heroparaone}
        heroparatwo={heroparatwo}
        heroparathree={heroparathree}
      />

      <HomePageContainer
        lineSectionData={lineSectionData}
        bottomLearnSectionData={bottomLearnSectionData}
      />
    </>
  );
}
