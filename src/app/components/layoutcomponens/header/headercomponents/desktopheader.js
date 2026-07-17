import HeaderContactButton from "./headercontactbutton";
import HeaderRightSection from "./headerrightsection";
import Link from "next/link";
import Image from "next/image";
// import HeaderContactButton from "./headercontactbutton";

export default function DesktopHeader({ isScrolled }) {
  return (
    <div className={`header-main-container ${isScrolled ? "scrolled" : ""}`}>
      {/* <HeaderLeftSection /> */}
      <Link href="/" aria-label="Lumhera home">
        <Image
          src="/images/Lumhera_logo_no_background.png"
          alt="Lumhera"
          width={220}
          height={53}
          // className="header-logo-img"
        />
      </Link>
      <HeaderRightSection />
      <HeaderContactButton name="Talk To Us" />
    </div>
  );
}
