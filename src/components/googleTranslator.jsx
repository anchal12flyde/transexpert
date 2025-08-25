"use client";
import { useEffect } from "react";
import Script from "next/script";
import "@/app/globals.css"

export default function CustomTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,hi,fr" },
        "google_translate_element"
      );
    };
  }, []);

  const translatePage = (lang) => {
    const frame = document.querySelector("iframe.goog-te-menu-frame");
    if (!frame) return alert("Google Translate not loaded yet");
    const frameDoc = frame.contentDocument || frame.contentWindow.document;
    const langEl = frameDoc.querySelector(`a[href*='${lang}']`);
    if (langEl) langEl.click();
  };

  return (
    <div>
      {/* Hidden widget */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Your own dropdown */}
      <select
        onChange={(e) => translatePage(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="en">Englisha</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}
