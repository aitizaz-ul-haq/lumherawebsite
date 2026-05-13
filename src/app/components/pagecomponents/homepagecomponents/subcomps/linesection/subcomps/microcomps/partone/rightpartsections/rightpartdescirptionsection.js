export default function RightPartDescriptionSection({ partOne }) {
  return (
    <div className="linesection-partone-description-wrapper">
      {partOne.description.map((item) => (
        <p
          key={item.id}
          className="linesection-partone-para font-inter"
        >
          {item.paragraph}
        </p>
      ))}
    </div>
  );
}