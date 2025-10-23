import QuoteSection from "../../../aboutpagecomponenets/quotesection/quotesection";

export default function AboutThirdSection({ aboutThirdSection }) {
  return (
    <>
      {aboutThirdSection && (
        <QuoteSection
          quoteTextOne={aboutThirdSection.quotetextone || ""}
          quoteTextTwo={aboutThirdSection.quotetexttwo || ""}
        />
      )}
    </>
  );
}
