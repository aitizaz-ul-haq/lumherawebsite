export default function HomeProductsGridTextContainer({
  homegridlargeheading,
  homegriddescription,
}) {
  return (
    <div className="homepagepructs-grid-text-container">
      <h2 className="homepagepructs-grid-main-heading font-playfair">
        {homegridlargeheading}
      </h2>
      <p className="homepagepructs-grid-main-para font-inria">
        {homegriddescription}
      </p>
    </div>
  );
}
