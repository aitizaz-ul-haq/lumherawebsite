import Link from "next/link";
import "../styles/headercontactbutton.css";

export default function HeaderContactButton({ name }) {
  return (
    <>
      <Link
        href="/contact"
        className="footer-list-item font-inter"
        title="Contact us right now"
      >
        <button className="header-contact-button font-inria">{name}</button>
      </Link>
    </>
  );
}
