import "./globals.css";
import GlobalLoaderProvider from "@/components/GlobalLoader";
import GoogleTranslator from "@/components/googleTranslator";
import { Onest } from "next/font/google";

const onest = Onest({ subsets: ["latin"], display: "swap" });
export const metadata = {
  title: "TransExpert – North American Logistics & Cross-Border Freight",
  description:
    "Reliable cross-border logistics from Canada to the U.S. with temperature-controlled, expedited, and same-day delivery.",
  metadataBase: new URL("https://transexpert.ca"),
  openGraph: {
    title: "TransExpert – Logistics Across North America",
    description:
      "Cross-border freight solutions: FTL, LTL, temperature-controlled, expedited & more.",
    url: "https://transexpert.ca",
    siteName: "TransExpert",
    images: [
      {
        url: "src/app/opengraph-image.png.png",
        width: 1200,
        height: 630,
        alt: "TransExpert Freight & Logistics",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TransExpert – Trusted North American Logistics",
    description:
      "Your source for efficient cross-border freight services between Canada and the U.S.",
    images: ["/images/previewLink.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <GlobalLoaderProvider minMs={2500}>{children}</GlobalLoaderProvider>
        <GoogleTranslator />
      </body>
    </html>
  );
}
