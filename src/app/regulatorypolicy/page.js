import MainHeroSection from "../components/sharedcomponents/mainherosection/mainherosection";

import RegulatoryPageComponents from "../components/pagecomponents/regulatorypolicypagecomponents/regulatorypagecomponents";

import Regulatorypolicypagedata from "@/app/data/regulatorypolicypagedata/regulatorypagedata.json";

let herotitle = Regulatorypolicypagedata.herosection.herotitle;
let herotitlesize = Regulatorypolicypagedata.herosection.herotitlesize;
let herobackgroundimage = Regulatorypolicypagedata.herosection.backgroundImages;
let herotitlewidth = Regulatorypolicypagedata.herosection.herotitlewidth;

export default function RegulatoryPolicyPage() {
  const first = Regulatorypolicypagedata?.FirstSectionparas || [];
  const second = Regulatorypolicypagedata?.SecondSectionparas || [];
  const ifpr = Regulatorypolicypagedata?.IFPRDisclosure || {};
  return (
    <>
      <MainHeroSection
        herotitle={herotitle}
        herobackgroundimage={herobackgroundimage}
        herotitlesize={herotitlesize}
        herotitlewidth={herotitlewidth}
      />

      <RegulatoryPageComponents first={first} second={second} ifpr={ifpr} />
    </>
  );
}
