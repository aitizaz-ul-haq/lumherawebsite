import HeaderMobileMenuRightSection from "./headermobilemenurightsection";
import HeaderLeftSection from "./headerleftsection";

export default function MobileHeader({ isScrolled }) {
  return (
    <div
      className={`header-mobile-container ${
        isScrolled ? "mobile-header-scrolled" : ""
      }`}
    >
      <HeaderLeftSection />
      <HeaderMobileMenuRightSection />
    </div>
  );
}
