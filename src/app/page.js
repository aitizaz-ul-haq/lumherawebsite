import Script from "next/script";

import MainHeroSection from "./components/sharedcomponents/mainherosection/mainherosection";
import HomePageContainer from "./components/pagecomponents/homepagecomponents/homepagecontainer/homepagecontainer";

// ✅ point to the new JSON file (fix the old typo in path/name)
import Homepagedata from "./data/homepagedata/homaepagedata.json";
import HomePageJsonLd from "./data/jsonld/homepagejsonld.json";

export const metadata = {
  title: "Financial Literacy for Children & Families | Lumhera",
  description:
    "Lumhera brings financial literacy to life through Esther the Investor — an interactive, story-driven game where children learn by doing. Empowering families, schools, and every girl to shape their own financial future.",
  keywords: [
    "Lumhera",
    "financial literacy for children",
    "financial education for families",
    "interactive financial learning",
    "Esther the Investor",
    "financial empowerment for girls",
    "money learning for kids",
    "story-based financial education",
    "financial literacy game",
  ],
  authors: [{ name: "Lumhera" }],
  creator: "Lumhera",
  publisher: "Lumhera",
  metadataBase: new URL("https://www.lumhera.com"),
  openGraph: {
    title: "Financial Literacy for Children & Families | Lumhera",
    description:
      "Bringing financial literacy to life through interactive, story-driven learning for families and schools.",
    url: "https://www.lumhera.com",
    siteName: "Lumhera",
    images: [
      {
        url: "https://www.lumhera.com/images/homepage_preview.webp",
        width: 1200,
        height: 630,
        alt: "Lumhera — Financial Literacy for Children & Families",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Literacy for Children & Families | Lumhera",
    description:
      "Interactive, story-driven financial learning for families, children, and schools.",
    images: ["https://www.lumhera.com/images/homepage_preview.webp"],
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
    canonical: "https://www.lumhera.com",
  },
  category: "Education",
};

// --Hero section data----------------------------------
const herotitle = Homepagedata.herosection.herotitle;
const herotitlesize = Homepagedata.herosection.herotitlesize;
const herobackgroundimage = Homepagedata.herosection.backgroundImages;
const herotitlewidth = Homepagedata.herosection.herotitlewidth;
const heroparaone = Homepagedata.herosection.heroparaone;
const heroparatwo = Homepagedata.herosection.heroparatwo;
const heroparathree = Homepagedata.herosection.heroparathree;

// --Homepage sections data-----------------------------
const lineSectionData = Homepagedata.lineSection;
const bottomLearnSectionData = Homepagedata.bottomLearnSection;

export default function Home() {
  return (
    <>
      <Script
        id="jsonld-home-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(HomePageJsonLd),
        }}
      />

      <MainHeroSection
        herotitle={herotitle}
        herobackgroundimage={herobackgroundimage}
        herotitlesize={herotitlesize}
        herotitlewidth={herotitlewidth}
        heroparaone={heroparaone}
        heroparatwo={heroparatwo}
        heroparathree={heroparathree}
      />

      <HomePageContainer
        lineSectionData={lineSectionData}
        bottomLearnSectionData={bottomLearnSectionData}
      />
    </>
  );
}
