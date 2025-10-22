import FooterSocialMediaSection from "./footersocialmediasection";
import Link from "next/link";

export default function FooterUpperSubSectionFour() {
  return (
    <div className="footer-upper-subsection-four">
      <div className="contact-socialmedia-listing">
        <ul className="footer-list-main  font-inter">
          <li className="footer-list-title">Contact Us</li>
          <li className="footer-list-item text-light">
            <Link href="/contact" className="footer-list-item text-light" title="Connect with us now">
              hr@fgkbackoffice.com
            </Link>
          </li>

          <li className="footer-list-item text-light">
            <Link href="/privacypolicy" className="footer-list-item text-light" title="Read our Privacy Policy">
              Privacy Policy
            </Link>
          </li>
          <li className="footer-list-item">
            <FooterSocialMediaSection />
          </li>
        </ul>
      </div>
    </div>
  );
}
