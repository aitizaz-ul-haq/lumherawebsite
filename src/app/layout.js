// app/layout.js
import { Work_Sans, Open_Sans, Inter, Kaisei_Decol } from "next/font/google";
import "./globals.css";

import Header from "./components/layoutcomponens/header/header";
import Footer from "./components/layoutcomponens/footer/footer";

const playfair = Work_Sans({
  subsets: ["latin-ext"],
  variable: "--font-work-sans",
  weight: ["100","200","300","400","500","600","700","800","900"],
  style: "normal",
  display: "swap",
});

const inriaSerif = Open_Sans({
  subsets: ["latin-ext"],
  variable: "--font-open-sans",
  weight: ["300","400","500","600","700","800"],
  style: "normal",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  weight: ["100","200","300","400","500","600","700","800","900"],
  style: "normal",
  display: "swap",
});

// NEW: Kaisei Decol (Regular only)
const kaiseiDecol = Kaisei_Decol({
  subsets: ["latin"],        // use "latin" (Kaisei Decol ships with Regular 400)
  variable: "--font-kaisei-decol",
  weight: ["400"],
  style: "normal",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/main-background.webp" />
      </head>
      <body
        className={`${playfair.variable} ${inriaSerif.variable} ${inter.variable} ${kaiseiDecol.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
