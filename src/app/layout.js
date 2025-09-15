import "./globals.css";
import GlobalLoaderProvider from "@/components/GlobalLoader";
import GoogleTranslator from "@/components/googleTranslator";
import { Onest } from "next/font/google";

const onest = Onest({ subsets: ["latin"], display: "swap" });



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
