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
        <Link href="/contact" className="general-linkage">
          <button className="footermidbutton-button font-inter">
            CONTACT US FOR MORE DETAILS →
          </button>
        </Link>
      </div>

      <div className="footerlistcollection-container">
        <div className="footerlist">
          <ul className="listingfooter">
            <li className="list-element font-inter">
              {" "}
              <Link
                href="/"
                className="list-element font-inter general-linkage list-element-color"
              >
                Home
              </Link>
            </li>

            <li className="list-element font-inter">
              {" "}
              <Link
                href="/about"
                className="list-element font-inter general-linkage list-element-color"
              >
                About
              </Link>
            </li>

            <li className="list-element font-inter">
              {" "}
              <Link
                href="/learn"
                className="list-element font-inter general-linkage list-element-color"
              >
                Learn+
              </Link>
            </li>

            <li className="list-element font-inter">
              {" "}
              <Link
                href="/tools"
                className="list-element font-inter general-linkage list-element-color"
              >
                Tools
              </Link>
            </li>

            <li className="list-element font-inter">
              {" "}
              <Link
                href="/method"
                className="list-element font-inter general-linkage list-element-color"
              >
                Method
              </Link>
            </li>

            <li className="list-element font-inter">
              {" "}
              <Link
                href="/contact"
                className="list-element font-inter general-linkage list-element-color"
              >
                Contact
              </Link>
            </li>

            <li
              className="list-element font-inter"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <Link
                href="https://www.linkedin.com/"
                className="general-linkage list-element-color"
                aria-label="Linkedin"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <Image
                  src="/images/linkedin-lumhera.png"
                  alt="Linkedin"
                  width={32}
                  height={32}
                  style={{ width: "32px", height: "32px", display: "block" }}
                />
              </Link>

              <Link
                href="https://www.instagram.com/"
                className="general-linkage list-element-color"
                aria-label="Instagram"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <Image
                  src="/images/instagram-lumhera.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  style={{ width: "32px", height: "32px", display: "block" }}
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="footerlist">
          <ul className="listingfooter">
            <li className="list-element font-inter">
              {" "}
              <Link
                href="/about"
                className="list-element font-inter general-linkage list-element-color"
              >
                Who We Are
              </Link>
            </li>
            <li className="list-element font-inter">
              {" "}
              <Link
                href="/method"
                className="list-element font-inter general-linkage list-element-color"
              >
                What We Do
              </Link>
            </li>
            <li className="list-element font-inter">
              {" "}
              <Link
                href="/tools"
                className="list-element font-inter general-linkage list-element-color"
              >
                Our Tools
              </Link>
            </li>
          </ul>
        </div> */}

        {/* <div className="footerlist">
          <ul className="listingfooter">
            <li className="list-element font-inter">
              {" "}
              <Link
                href="/about"
                className="list-element font-inter general-linkage list-element-color"
              >
                Our Values
              </Link>
            </li>
          </ul>
        </div> */}

        {/* <div className="footerlist">
          <ul className="listingfooter">
            <li className="list-element font-inter general-linkage list-element-color">
              Instagram
            </li>
            <li className="list-element font-inter general-linkage list-element-color">
              Facebook
            </li>
            <li className="list-element font-inter general-linkage list-element-color">
              X
            </li>
            <li className="list-element font-inter general-linkage list-element-color">
              Medium
            </li>
            <li className="list-element font-inter general-linkage list-element-color">
              Linkdin
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
