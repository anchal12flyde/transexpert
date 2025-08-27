"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleTranslator() {
  useEffect(() => {
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,hi,fr" },
        "google_translate_element"
      );
    };

    // 🔧 Remove Google top bar if injected
    const interval = setInterval(() => {
      const frame = document.querySelector(".goog-te-banner-frame");
      if (frame) {
        frame.remove(); // Remove iframe
        document.body.style.top = "0px"; // Reset body shift
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
