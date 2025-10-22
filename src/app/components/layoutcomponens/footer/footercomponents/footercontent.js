import FooterUpperSection from "./footeruppersection";
import FooterLine from "./footerline";
import FooterLowerSection from "./footerlowersection";

export default function FooterContent() {
  return (
    <div className="footer-content">
      <FooterUpperSection />
      {/* <FooterLine /> */}
      <FooterLowerSection />
    </div>
  );
}
