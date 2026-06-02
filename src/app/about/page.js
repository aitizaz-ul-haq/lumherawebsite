// app/about/page.jsx (server)
import Script from "next/script";

import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import Aboutpagedata from "../data/aboutpagedata/aboutpagedata.json";
import AboutPageJsonLd from "../data/jsonld/aboutpagejsonld.json";

export const metadata = {
  title: "Who We Are | Lumhera",
  description:
    "Learn about Lumhera — a mission-driven company creating digital experiences that bring financial literacy to life. Discover our values, our founder's story, and our commitment to empowering every girl and family through financial education.",
  keywords: [
    "Lumhera about",
    "financial literacy mission",
    "financial empowerment for girls",
    "Esther the Investor",
    "financial education values",
    "financial confidence for children",
    "who is Lumhera",
    "financial equality and inclusion",
    "story-driven financial education",
  ],
  authors: [{ name: "Lumhera" }],
  creator: "Lumhera",
  publisher: "Lumhera",
  metadataBase: new URL("https://www.lumhera.com"),
  openGraph: {
    title: "Who We Are | Lumhera",
    description:
      "Lumhera creates digital experiences that bring financial literacy to life — empowering every girl, family, and school with confidence and independence.",
    url: "https://www.lumhera.com/about",
    siteName: "Lumhera",
    images: [
      {
        url: "https://www.lumhera.com/images/aboutpage-preview.webp",
        width: 1200,
        height: 630,
        alt: "Lumhera — Who We Are",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Lumhera",
    description:
      "Our mission, values, and story — building financial confidence and equality through education.",
    images: ["https://www.lumhera.com/images/aboutpage-preview.webp"],
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
    canonical: "https://www.lumhera.com/about",
  },
  category: "Education",
};

const headerdata        = Aboutpagedata.homepageheader;
const aboutSection      = Aboutpagedata.aboutfirstsection;
const valuesSection     = Aboutpagedata.aboutsecondsection;
const aboutThirdSection = Aboutpagedata.aboutthirdsection; // NEW
const aboutCtaOne       = Aboutpagedata.aboutctaone;       // NEW

export default function About() {
  return (
    <>
      <Script
        id="jsonld-about-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(AboutPageJsonLd),
        }}
      />

      <PageTemplate
      headerdata={headerdata}
      showImage={true}
      showAbout={true}
      aboutSection={aboutSection}
      valuesSection={valuesSection}
      aboutThirdSection={aboutThirdSection} // NEW
      aboutCtaOne={aboutCtaOne}             // NEW
    />
    </>
  );
}
