import Image from "next/image";
import Link from "next/link";

export default function HeaderLeftSection() {
  return (
    <div className="header-left-logosection">
      <Link href="/" title="home">
        <Image
          src="/images/Lumhera_logo_no_background.png"
          alt="FGK logo"
          width={220}
          height={53}
          // className="header-logo-img"
        />
      </Link>
    </div>
  );
}
