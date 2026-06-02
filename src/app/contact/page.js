import Script from "next/script";

import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";

import Contactpagedata from "../data/contactpagedata/contactpagedata.json";
import ContactPageJsonLd from "../data/jsonld/contactpagejsonld.json";

export const metadata = {
  title: "Contact Us | Lumhera",
  description:
    "Get in touch with Lumhera. Whether you are a parent, teacher, or policymaker, we would love to hear from you and explore how Lumhera can support your financial education goals.",
  keywords: [
    "Lumhera contact",
    "financial education enquiry",
    "school partnership",
    "family learning support",
    "contact Lumhera",
    "financial literacy for schools",
    "teacher financial education",
    "policymaker education partnership",
  ],
  authors: [{ name: "Lumhera" }],
  creator: "Lumhera",
  publisher: "Lumhera",
  metadataBase: new URL("https://www.lumhera.com"),
  openGraph: {
    title: "Contact Us | Lumhera",
    description:
      "Whether you are a parent, teacher, or policymaker — we would love to hear from you.",
    url: "https://www.lumhera.com/contact",
    siteName: "Lumhera",
    images: [
      {
        url: "https://www.lumhera.com/images/contactpage_preview.webp",
        width: 1200,
        height: 630,
        alt: "Lumhera — Contact Us",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Lumhera",
    description:
      "Reach out to Lumhera — for parents, teachers, and policymakers interested in financial education.",
    images: ["https://www.lumhera.com/images/contactpage_preview.webp"],
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
    canonical: "https://www.lumhera.com/contact",
  },
  category: "Education",
};

let headerdata = Contactpagedata.homepageheader;

export default function Contact() {
  return (
    <>
      <Script
        id="jsonld-contact-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ContactPageJsonLd),
        }}
      />

      <PageTemplate headerdata={headerdata} showImage={false} />
    </>
  );
}
