import HandLHeadingSection from "./subcomps/handlheadingsection";
import HandLSubstatementSection from "./subcomps/handlsubstatementsection";
import HandLListingSection from "./subcomps/handllistingsection";

export default function HeadingAndList({
  heading = "",
  substatement = "",
  listItems = [],
}) {
  return (
    <div className="heading-and-list-container">
      <HandLHeadingSection heading={heading} />
      <HandLSubstatementSection substatement={substatement} />
      <HandLListingSection listItems={listItems} />
    </div>
  );
}
