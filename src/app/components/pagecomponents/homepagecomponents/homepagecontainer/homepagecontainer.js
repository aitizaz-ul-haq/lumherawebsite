import "./styles/homepagecontainer.css";

import LineSection from "../subcomps/linesection/linesection";
import VideoBannerSection from "../subcomps/linesection/subcomps/videobannersection";
import BottomLearnSection from "../subcomps/bottomlearnsection/bottomlearnsection";

import videoBannerData from "@/app/data/videobannerdata/videobannerdata.json";

export default function HomePageContainer({
  lineSectionData,
  bottomLearnSectionData
}) {
  return (
    <div className="main-page-container">
      <LineSection
        partOne={lineSectionData.partOne}
        partTwo={lineSectionData.partTwo}
        partThree={lineSectionData.partThree}
        ourMethod={lineSectionData.ourMethod}
      />

      <VideoBannerSection
        image={videoBannerData.trailer.image}
        title={videoBannerData.trailer.title}
        youtubeUrl={videoBannerData.trailer.youtubeUrl}
      />

      <BottomLearnSection
        tinyTitle={bottomLearnSectionData.tinyTitle}
        largeHeading={bottomLearnSectionData.largeHeading}
        cards={bottomLearnSectionData.cards}
      />
    </div>
  );
}
