import OurMethodBlockSectionLeftPart from "./microcomps/ourmethodblocksection/ourmethodblocksectionleftpart";
import OurMehodBlockSectionRightPart from "./microcomps/ourmethodblocksection/ourmethodeblocksectionrightpart";

export default function OurMethodBlockSection({ ourMethod }) {
  return (
    <>
      {ourMethod.blocks?.map((block, idx) => (
        <div className="linesection-partone-container" key={idx}>
          <OurMethodBlockSectionLeftPart block={block} />
          <OurMehodBlockSectionRightPart block={block} />
        </div>
      ))}
    </>
  );
}
