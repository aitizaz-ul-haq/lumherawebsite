import Link from "next/link";
import "../styles/headercontactbutton.css";

export default function HeaderContactButton({ name }) {
  return (
    <>
      <Link
        href="/contact"
        className="header-contact-button font-inria"
        title="Talk To Us Now"
      >
        {name}
      </Link>
    </>
  );
}
