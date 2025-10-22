import Link from "next/link";

export default function FooterLowerSection() {
  return (
    <div className="footer-lowersection">
      <div className="rights-container-section">
        {/* <p className="footer-rights-line font-inter ">
          <Link
            href="/privacypolicy"
            className="footer-rights-line"
            title="See our Privacy policy"
          >
            Privacy Policy
          </Link>
          &nbsp;|&nbsp;
          <Link
            href="/disclaimer"
            className="footer-rights-line"
            title="Disclaimer"
          >
            Disclaimer
          </Link>
          &nbsp;|&nbsp;
          <Link
            href="/regulatorypolicy"
            className="footer-rights-line"
            title="See our Regulatory Policy"
          >
            Regulatory Policy
          </Link>
        </p> */}
        <p className="footer-rights-line font-inter">
          {/* <Link
            href="/"
            className="footer-rights-line"
            title="See our Privacy policy and Disclaimer"
          > */}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing
          {/* </Link> */}
        </p>

        <p className="footer-rights-line font-inter">
          {/* <Link
            href="/"
            className="footer-rights-line"
            title="See our Privacy policy and Disclaimer"
          > */}
          {/* Views and opinions are current and may be subject to change. They
          should not be construed as investment advice. The value of your
          investments can go down as well as up and we stress that past
          performance is no guarantee for future performance. */}
          {/* </Link> */}
        </p>
      </div>
      <div className="backtotop-button-section"></div>
    </div>
  );
}
