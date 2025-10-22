import Link from "next/link";

export default function FooterUpperSubSectionThree() {
  return (
    <div className="footer-upper-subsection-three">
      <div className="industries-listing">
        <ul className="footer-list-main font-inter">
          <li className="footer-list-title">Industries</li>
          <li className="footer-list-item text-light">
            {/* <Link
              className="footer-list-item text-light"
              href="/industries#fintech"
              title="Explore Fintech industry services"
            >
              Fintech
            </Link> */}
          </li>

          <li className="footer-list-item text-light">
            {" "}
            {/* <Link
              className="footer-list-item text-light"
              href="/industries#tech-support"
              title="View solutions for technology and IT support"
            >
              Tech Support
            </Link> */}
          </li>

          <li className="footer-list-item text-light">
            {/* <Link
              className="footer-list-item text-light"
              href="/industries#financial-services"
              title="Learn about our financial service expertise"
            >
              Financial Services
            </Link> */}
          </li>

          <li className="footer-list-item text-light">
            {/* <Link
              className="footer-list-item text-light"
              href="/industries#accountancy-finance"
              title="Discover our accountancy and finance offerings"
            >
              Accountancy & Finance
            </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
