import MainHeroSection from "../components/sharedcomponents/mainherosection/mainherosection";

import DisclaimerPageComponents from "../components/pagecomponents/disclaimerpagecomponents/disclaimerpagecomponents";

import Disclaimerpagedata from "@/app/data//disclaimerpagedata/disclaimerpagedata.json";

let herotitle = Disclaimerpagedata.herosection.herotitle;
let herotitlesize = Disclaimerpagedata.herosection.herotitlesize;
let herobackgroundimage = Disclaimerpagedata.herosection.backgroundImages;
let herotitlewidth = Disclaimerpagedata.herosection.herotitlewidth;

const sections = Disclaimerpagedata.sections || [];

export default function DisclaimerPage() {
  return (
    <>
      <MainHeroSection
        herotitle={herotitle}
        herobackgroundimage={herobackgroundimage}
        herotitlesize={herotitlesize}
        herotitlewidth={herotitlewidth}
      />
      <DisclaimerPageComponents sections={sections} />
    </>
  );
}
