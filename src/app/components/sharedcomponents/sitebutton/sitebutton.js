import Link from "next/link";
import "./styles/sitebutton.css";

export default function SiteButton({ sectionbuttondata }) {
  return (
    <>
      <Link
        className="site-button general-linkage font-inria"
        href={sectionbuttondata.buttonlink}
        title={sectionbuttondata.buttontitle}
        scroll={true}
      >
        {sectionbuttondata.buttonname}
      </Link>
    </>
  );
}
