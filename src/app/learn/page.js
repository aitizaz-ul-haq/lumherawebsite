// app/learn/page.jsx

import Script from "next/script";

import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import Learnpagedata from "../data/learnpagedata/learnpagedata.json";
import LearnPageJsonLd from "../data/jsonld/learnpagejsonld.json";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Learn With Us | Lumhera",
  description:
    "Explore Lumhera’s story-based financial learning for families and schools. Interactive chapters, progress tracking, classroom-ready content, and inclusive financial education.",
  keywords: [
    "Lumhera",
    "financial literacy for children",
    "financial education for families",
    "money learning for kids",
    "school financial literacy",
    "OECD INFE financial literacy",
    "interactive financial education",
    "family learning platform",
    "financial literacy for girls",
  ],
  authors: [{ name: "Lumhera" }],
  creator: "Lumhera",
  publisher: "Lumhera",
  metadataBase: new URL("https://www.lumhera.com"),
  openGraph: {
    title: "Learn With Us | Lumhera",
    description:
      "Discover Lumhera’s interactive financial learning experience for families and schools.",
    url: "https://www.lumhera.com/learn",
    siteName: "Lumhera",
    images: [
      {
        url: "https://www.lumhera.com/images/learn-preview.webp",
        width: 1200,
        height: 630,
        alt: "Lumhera — Learn With Us",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn With Us | Lumhera",
    description:
      "Interactive financial learning for families, children, and schools.",
    images: ["https://www.lumhera.com/images/learn-preview.webp"],
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
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.lumhera.com/learn",
  },
  category: "Education",
};

const headerdata = Learnpagedata.homepageheader;
const learnFirstSection = Learnpagedata.learnfirstsection;
const learnSecondSection = Learnpagedata.learnsecondsection;
const learnCtaOne = Learnpagedata.learnctaone;
const learnThirdSection = Learnpagedata.learnthirdsection;
const learnFourthSection = Learnpagedata.learnfourthsection;
const learnCtaTwo = Learnpagedata.learnctatwo;

export default function Learn() {
  return (
    <>
      <Script
        id="jsonld-learn-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LearnPageJsonLd),
        }}
      />

      <PageTemplate
        headerdata={headerdata}
        showImage={true}
        showLearn={true}
        learnFirstSection={learnFirstSection}
        learnSecondSection={learnSecondSection}
        learnCtaOne={learnCtaOne}
        learnThirdSection={learnThirdSection}
        learnFourthSection={learnFourthSection}
        learnCtaTwo={learnCtaTwo}
      />
    </>
  );
}