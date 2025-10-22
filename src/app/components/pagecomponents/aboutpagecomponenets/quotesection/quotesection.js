import Image from "next/image";
import "./styles/quotesection.css";

export default function QuoteSection({ quoteTextOne, quoteTextTwo }) {
  return (
    <div className="quote-section-container">
      <Image
        src="/images/quote.png"
        alt="About Page Header Image"
        width={120}
        height={120}
        className="page-header-image"
        priority
      />
      <h2 className="quote-text font-inter">{quoteTextOne}</h2>
      <h2 className="quote-text font-inter">{quoteTextTwo}</h2>
    </div>
  );
}
