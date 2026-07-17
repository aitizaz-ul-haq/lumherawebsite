import Image from "next/image";
import Link from "next/link";

export default function FooterUpperSubSectionOne() {
  return (
    <div className="footer-upper-subsection-one">
      <div className="footer-logo-container">
        <Link href="/" aria-label="Lumhera home">
          <Image
            src="/images/LUMHERA_logo_white.png"
            alt="Lumhera"
            width={280}
            height={63}
            // className="header-logo-img"
          />
        </Link>
      </div>
    </div>
  );
}
