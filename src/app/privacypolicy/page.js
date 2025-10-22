import MainHeroSection from "../components/sharedcomponents/mainherosection/mainherosection";

import PrivacyPolicyPageComponents from "../components/pagecomponents/privacypolicypagecomponents/privacypolicypagecomponents";

import Privacypolicypagedata from "@/app/data//privacypolicypagedata/privacypolicypagedata.json";

let herotitle = Privacypolicypagedata.herosection.herotitle;
let herotitlesize = Privacypolicypagedata.herosection.herotitlesize;
let herobackgroundimage = Privacypolicypagedata.herosection.backgroundImages;
let herotitlewidth = Privacypolicypagedata.herosection.herotitlewidth;

const sections = Privacypolicypagedata.sections || [];

export default function PrivacyPolicyPage() {
  return (
    <>
      <MainHeroSection
        herotitle={herotitle}
        herobackgroundimage={herobackgroundimage}
        herotitlesize={herotitlesize}
        herotitlewidth={herotitlewidth}
      />

      <PrivacyPolicyPageComponents sections={sections} />
    </>
  );
}
