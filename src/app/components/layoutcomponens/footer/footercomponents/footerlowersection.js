import Link from "next/link";

export default function FooterLowerSection() {
  return (
    <div className="footer-lowersection">
      <div className="rights-container-section">
        <Link
          href="/privacyanddisclaimer"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-privacy-link"
          title="Click to view our Privacy Policy and Disclaimer"
        >
          <p className="footer-rights-line font-inter">
            <b>Privacy&nbsp;|&nbsp;Disclaimer</b>
          </p>

          <p className="footer-rights-line font-inter">
            Lumhera is committed to protecting user privacy, especially for
            children, and uses limited information to provide, improve, and
            safeguard the learning experience. Esther the Investor is created
            for educational purposes only and introduces financial concepts in a
            simplified and engaging way. It does not provide financial,
            investment, legal, or professional advice, and should not be relied
            upon for real financial decisions. We do not sell personal data, and
            any trusted third-party services are used only to support platform
            performance, safety, analytics, or hosting. Users, parents, or
            guardians may contact Lumhera to request access, correction, or
            deletion of personal information where applicable.
          </p>
        </Link>
      </div>

      <div className="backtotop-button-section"></div>
    </div>
  );
}
