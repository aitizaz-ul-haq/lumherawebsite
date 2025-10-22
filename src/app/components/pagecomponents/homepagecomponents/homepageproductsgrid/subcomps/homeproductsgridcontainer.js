import Image from "next/image";

export default function HomeProductsGridContainer({ haomepageproductagrid }) {
  return (
    <div className="homepagepructs-grid-section-container">
      {haomepageproductagrid.map((griddata) => (
        <div key={griddata.id} className="homepagepructs-grid-section-card">
          <Image
            src={griddata.link}
            width={griddata.width}
            height={griddata.height}
            alt={griddata.alt}
            title={griddata.title}
          />
          <p className="homepagepructs-grid-section-title">
            {griddata.cardtitle}
          </p>
        </div>
      ))}
    </div>
  );
}
