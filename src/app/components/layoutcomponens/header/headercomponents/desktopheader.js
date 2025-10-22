import HeaderLeftSection from "./headerleftsection";
import HeaderRightSection from "./headerrightsection";
// import HeaderContactButton from "./headercontactbutton";

export default function DesktopHeader({ isScrolled }) {
  return (
    <div className={`header-main-container ${isScrolled ? "scrolled" : ""}`}>
      {/* <HeaderLeftSection /> */}
      <HeaderRightSection />
    </div>
  );
}
