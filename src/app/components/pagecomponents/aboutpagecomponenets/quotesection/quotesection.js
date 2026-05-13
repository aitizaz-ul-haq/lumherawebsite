import QuoteSectionImage from "./subcomps/quotesectionimage";
import QuoteTextParaOne from "./subcomps/quotetextparaone";
import QuoteTextParaTwo from "./subcomps/quotetextparatwo";
import QuoteTextParaThree from "./subcomps/quotetextparathree";
import "./styles/quotesection.css";

export default function QuoteSection({ quoteTextOne, quoteTextTwo, quoteTextThree }) {
  return (
    <div className="quote-section-container">
      <QuoteSectionImage />
      <QuoteTextParaOne quoteTextOne={quoteTextOne} />
      <QuoteTextParaTwo quoteTextTwo={quoteTextTwo} />
      <QuoteTextParaThree quoteTextThree={quoteTextThree} />
    </div>
  );
}
