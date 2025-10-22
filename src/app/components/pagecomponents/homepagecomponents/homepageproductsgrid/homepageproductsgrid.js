import "./styles/homepageproductsgrid.css";

import HomeProductsGridTextContainer from "./subcomps/homeproductsgridtextcontainer";
import HomeProductsGridContainer from "./subcomps/homeproductsgridcontainer";
import HomeProductsGridButtonContainer from "./subcomps/homeproductsgridbuttoncontainer";

export default function HomePageProductsGrid({
  homegridlargeheading,
  homegriddescription,
  haomepageproductagrid,
  gridbuttondata,
}) {
  return (
    <>
      <div className="homepagepructs-grid-container">
        <HomeProductsGridTextContainer
          homegridlargeheading={homegridlargeheading}
          homegriddescription={homegriddescription}
        />
        <HomeProductsGridContainer
          haomepageproductagrid={haomepageproductagrid}
        />
        <HomeProductsGridButtonContainer gridbuttondata={gridbuttondata} />
      </div>
    </>
  );
}
