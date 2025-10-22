import "./styles/homepagecontainer.css";

import LineSection from "../subcomps/linesection/linesection";
import BottomLearnSection from "../subcomps/bottomlearnsection/bottomlearnsection";

export default function HomePageContainer({}) {
  return (
    <div className="main-page-container">
      <LineSection />
      <BottomLearnSection />
    </div>
  );
}
