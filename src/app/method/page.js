// app/method/page.jsx (server)
import Script from "next/script";

import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import Methodpagedata from "../data/methodpagedata/methodpagedata.json";
import MethodPageJsonLd from "../data/jsonld/methodpagejsonld.json";

export const metadata = {
  title: "What We Do | Lumhera",
  description:
    "Discover Lumhera's evidence-based method for teaching financial literacy. Learning by doing, OECD/INFE aligned curriculum, story-driven experiences, and measurable outcomes in confidence, knowledge, and behaviour.",
  keywords: [
    "Lumhera method",
    "financial literacy methodology",
    "learning by doing",
    "OECD INFE financial education",
    "financial competence framework",
    "experiential financial learning",
    "financial education for children",
    "financial literacy outcomes",
    "school financial education method",
  ],
  authors: [{ name: "Lumhera" }],
  creator: "Lumhera",
  publisher: "Lumhera",
  metadataBase: new URL("https://www.lumhera.com"),
  openGraph: {
    title: "What We Do | Lumhera",
    description:
      "Evidence-based financial literacy through story, play, and real-world practice — aligned to OECD/INFE standards.",
    url: "https://www.lumhera.com/method",
    siteName: "Lumhera",
    images: [
      {
        url: "https://www.lumhera.com/images/methodpage_preview.webp",
        width: 1200,
        height: 630,
        alt: "Lumhera — What We Do",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What We Do | Lumhera",
    description:
      "Our evidence-based approach to financial literacy for families and schools, aligned to OECD/INFE standards.",
    images: ["https://www.lumhera.com/images/methodpage_preview.webp"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-48x48.png", sizes: "48x48", type: "image/png" },
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
    canonical: "https://www.lumhera.com/method",
  },
  category: "Education",
};

const headerdata          = Methodpagedata.homepageheader;
const methodFirstSection  = Methodpagedata.methodfirstsection;
const methodSecondSection = Methodpagedata.methodsecondsection;
const methodThirdSection  = Methodpagedata.methodthirdsection;
const methodFourSection   = Methodpagedata.methodfoursection;
const methodFiveSection   = Methodpagedata.methodfivesection;
const methodSixSection    = Methodpagedata.methodsixsection;
const methodCtaTwo        = Methodpagedata.Methodctatwo;

export default function Method() {
  return (
    <>
      <Script
        id="jsonld-method-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(MethodPageJsonLd),
        }}
      />

      <PageTemplate
      headerdata={headerdata}
      showImage={true}
      showMethod={true}
      methodFirstSection={methodFirstSection}
      methodSecondSection={methodSecondSection}
      methodThirdSection={methodThirdSection}
      methodFourSection={methodFourSection}
      methodFiveSection={methodFiveSection}
      methodSixSection={methodSixSection}
      methodCtaTwo={methodCtaTwo}
    />
    </>
  );
}
