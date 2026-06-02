// app/privacyanddisclaimer/page.jsx (server)
import Script from "next/script";

import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import PrivacyAndDisclaimerData from "../data/privacypolicypagedata/privacypolicypagedata.json";
import PrivacyPageJsonLd from "../data/jsonld/privacypagejsonld.json";

export const metadata = {
  title: "Privacy Policy & Disclaimer | Lumhera",
  description:
    "Lumhera's privacy policy and disclaimer. Learn how we protect user data — especially children's — and understand the educational purpose of Esther the Investor. GDPR aligned and designed with child safety at its core.",
  keywords: [
    "Lumhera privacy policy",
    "children's data protection",
    "GDPR compliance",
    "educational disclaimer",
    "Esther the Investor disclaimer",
    "child safety online",
    "data privacy for children",
    "Lumhera terms",
  ],
  authors: [{ name: "Lumhera" }],
  creator: "Lumhera",
  publisher: "Lumhera",
  metadataBase: new URL("https://www.lumhera.com"),
  openGraph: {
    title: "Privacy Policy & Disclaimer | Lumhera",
    description:
      "How Lumhera protects user privacy — especially for children — and the educational purpose behind Esther the Investor.",
    url: "https://www.lumhera.com/privacyanddisclaimer",
    siteName: "Lumhera",
    images: [
      {
        url: "https://www.lumhera.com/images/privacypaage_preview.webp",
        width: 1200,
        height: 630,
        alt: "Lumhera — Privacy Policy & Disclaimer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Disclaimer | Lumhera",
    description:
      "Lumhera's commitment to protecting children's data and the educational purpose of our platform.",
    images: ["https://www.lumhera.com/images/privacypaage_preview.webp"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/images/favicon.ico", type: "image/x-icon" }],
  },
  manifest: "/images/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.lumhera.com/privacyanddisclaimer",
  },
  category: "Education",
};

const headerdata = PrivacyAndDisclaimerData.homepageheader;
const privacyFirstSection = PrivacyAndDisclaimerData.privacyfirstsection;
const privacySecondSection = PrivacyAndDisclaimerData.privacysecondsection;
const privacyThirdSection = PrivacyAndDisclaimerData.privacythirdsection;
const privacyFourSection = PrivacyAndDisclaimerData.privacyfoursection;
const privacyFiveSection = PrivacyAndDisclaimerData.privacyfivesection;
const privacySixSection = PrivacyAndDisclaimerData.privacysixsection;
const privacySevenSection = PrivacyAndDisclaimerData.privacysevensection;
const privacyEightSection = PrivacyAndDisclaimerData.privacyeightsection;
const privacyNineSection = PrivacyAndDisclaimerData.privacyninesection;

// const privacyCtaTwo        = PrivacyAndDisclaimerData.privacyctatwo;

export default function PrivacyAndDisclaimer() {
  return (
    <>
      <Script
        id="jsonld-privacy-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PrivacyPageJsonLd),
        }}
      />

      <PageTemplate
      headerdata={headerdata}
      showImage={true}
      showPrivacy={true}
      privacyFirstSection={privacyFirstSection}
      privacySecondSection={privacySecondSection}
      privacyThirdSection={privacyThirdSection}
      privacyFourSection={privacyFourSection}
      privacyFiveSection={privacyFiveSection}
      privacySixSection={privacySixSection}
      privacySevenSection={privacySevenSection}
      privacyEightSection={privacyEightSection}
      privacyNineSection={privacyNineSection}
    />
    </>
  );
}
