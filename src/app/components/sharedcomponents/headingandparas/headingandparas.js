import "./styles/headingandparas.css";
import HandPCompHeadingSection from "./subcomps/handpcompheadingsection";
import HandPCompParagraphSection from "./subcomps/handpcompparagraphsection";

export default function HeadingAndParas({ heading = "", paragraphs = [] }) {
  return (
    <div className="heading-and-paras-container">
      <HandPCompHeadingSection heading={heading} />
      <HandPCompParagraphSection paragraphs={paragraphs} />
    </div>
  );
}
