import Link from "next/link";
import Image from "next/image";

export default function FooterUpperSubsectionTwo() {
  return (
    <div className="footer-upper-subsection-two">
      <div className="services-listing">
        <p className="footer-list-item font-inter">
          Learning by doing is at the heart of Lumhera. Through our interactive
          game, children don’t just study money they experience it, make
          decisions, and grow in confidence with every play.
        </p>
      </div>

      <div className="footermidbutton-container">
        <button className="footermidbutton-button font-inter">
          CONTACT US FOR MORE DETAILS →
        </button>
      </div>
    </div>
  );
}
