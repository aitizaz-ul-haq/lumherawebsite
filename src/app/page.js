import MainHeroSection from "./components/sharedcomponents/mainherosection/mainherosection";

import HomePageContainer from "./components/pagecomponents/homepagecomponents/homepagecontainer/homepagecontainer";

import Homepagedata from "@/app/data/homepagedata/homaepagedata.json";

//--Hero section data----------------------------------
let herotitle = Homepagedata.herosection.herotitle;
let herotitlesize = Homepagedata.herosection.herotitlesize;
let herobackgroundimage = Homepagedata.herosection.backgroundImages;
let herotitlewidth = Homepagedata.herosection.herotitlewidth;

export default function Home() {
  return (
    <>
      <MainHeroSection
        herotitle={herotitle}
        herobackgroundimage={herobackgroundimage}
        herotitlesize={herotitlesize}
        herotitlewidth={herotitlewidth}
      />
      <HomePageContainer />
    </>
  );
}
