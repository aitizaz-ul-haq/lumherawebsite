import HeaderRightSectionButtonSection from "./headerrightsectionbuttongroup";
import HeaderContactButton from "./headercontactbutton";
import Link from "next/link";
import Image from "next/image";

export default function HeaderRightSection() {
  return (
    <div className="header-right-buttongroupsection">
      <Link href="/" title="home">
        <Image
          src="/images/Lumhera_logo_no_background.png"
          alt="FGK logo"
          width={220}
          height={53}
          // className="header-logo-img"
        />
      </Link>
      <HeaderRightSectionButtonSection />
      <HeaderContactButton name="WORK WITH US" />
    </div>
  );
}
