import SiteButton from "@/app/components/sharedcomponents/sitebutton/sitebutton";

export default function HomeProductsGridButtonContainer({ gridbuttondata }) {
  return (
    <div className="homepagepructs-grid-button-container">
      <SiteButton sectionbuttondata={gridbuttondata} />
    </div>
  );
}
