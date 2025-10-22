import "./styles/linesection.css";

import PartOne from "./subcomps/partone";
import PartTwo from "./subcomps/parttwo";
import PartThree from "./subcomps/partthree";
import OurMethodMainHeadingSection from "./subcomps/ourmethodmainheadingsection";
import OurMethodBlockSection from "./subcomps/ourmethodblockssection";
import OurMethodBannerSection from "./subcomps/ourmethodbannersection";

export default function LineSection({
  partOne,
  partTwo,
  partThree,
  ourMethod,
}) {
  return (
    <div className="main-page-bckground">
      <div className="linesection-container">
        {/* Part One */}
        <PartOne partOne={partOne} />

        {/* Part Two */}
        <PartTwo partTwo={partTwo} />

        {/* Part Three */}
        <PartThree partThree={partThree} />
      </div>

      {/* Our Method */}
      <div className="ourmethodsection-conainer">
        <OurMethodMainHeadingSection ourMethod={ourMethod} />
        <OurMethodBlockSection ourMethod={ourMethod} />
        <OurMethodBannerSection ourMethod={ourMethod} />
      </div>
    </div>
  );
}
