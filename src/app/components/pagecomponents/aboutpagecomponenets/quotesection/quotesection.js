import QuoteSectionImage from "./subcomps/quotesectionimage";
import QuoteTextParaOne from "./subcomps/quotetextparaone";
import QuoteTextParaTwo from "./subcomps/quotetextparatwo";
import "./styles/quotesection.css";

export default function QuoteSection({ quoteTextOne, quoteTextTwo }) {
  return (
    <div className="quote-section-container">
      <QuoteSectionImage />
      <QuoteTextParaOne quoteTextOne={quoteTextOne} />
      <QuoteTextParaTwo quoteTextTwo={quoteTextTwo} />
    </div>
  );
}
