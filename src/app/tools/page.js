// app/tools/page.jsx
import Script from "next/script";

import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";
import Toolspagedata from "../data/toolspagedata/toolspagedata.json";
import ToolsPageJsonLd from "../data/jsonld/toolspagejsonld.json";

export const metadata = {
  title: "Tools We Use | Lumhera",
  description:
    "Explore Lumhera's financial education tools, including Esther the Investor — an immersive, story-driven game for children aged 10–16. Discover how Lumhera turns money into an adventure for families and schools.",
  keywords: [
    "Lumhera tools",
    "Esther the Investor",
    "financial literacy game",
    "financial education tools",
    "interactive money learning",
    "financial game for children",
    "story-driven financial education",
    "financial literacy for ages 10 to 16",
    "classroom financial tools",
  ],
  authors: [{ name: "Lumhera" }],
  creator: "Lumhera",
  publisher: "Lumhera",
  metadataBase: new URL("https://www.lumhera.com"),
  openGraph: {
    title: "Tools We Use | Lumhera",
    description:
      "Meet Esther the Investor — Lumhera's story-driven financial literacy game for children aged 10–16.",
    url: "https://www.lumhera.com/tools",
    siteName: "Lumhera",
    images: [
      {
        url: "https://www.lumhera.com/images/toolspage_preview.webp",
        width: 1200,
        height: 630,
        alt: "Lumhera — Tools We Use",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools We Use | Lumhera",
    description:
      "Explore Lumhera's interactive financial education tools for children, families, and schools.",
    images: ["https://www.lumhera.com/images/toolspage_preview.webp"],
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
    canonical: "https://www.lumhera.com/tools",
  },
  category: "Education",
};

const headerdata = Toolspagedata.homepageheader;
const toolsFirstSection = Toolspagedata.toolsfirstsection;
const toolsSecondSection = Toolspagedata.toolssecondsection;
const toolsThirdSection  = Toolspagedata.toolsthirdsection;
const toolsFourthSection = Toolspagedata.toolsfourthsection;
const toolsCtaOne        = Toolspagedata.toolsctaone;

export default function Tools() {
  return (
    <>
      <Script
        id="jsonld-tools-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ToolsPageJsonLd),
        }}
      />

      <PageTemplate
      headerdata={headerdata}
      showImage={true}
      showTools={true}
      toolsFirstSection={toolsFirstSection}
      toolsSecondSection={toolsSecondSection}
      toolsThirdSection={toolsThirdSection}
      toolsFourthSection={toolsFourthSection}
      toolsCtaOne={toolsCtaOne}
    />
    </>
  );
}
