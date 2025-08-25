"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import "@/app/globals.css"

function getCurrentLangFromCookie(): string | null {
  // Cookie format: googtrans=/source/target (e.g., /en/hi)
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) return null;
  const parts = decodeURIComponent(match[1]).split("/");
  return parts.length >= 3 ? parts[2] : null;
}

export interface UseGoogleTranslateResult {
  ready: boolean;
  currentLang: string | null;
  setLanguage: (lang: string) => void;
  reset: () => void;
}

export default function UseGoogleTranslate(): UseGoogleTranslateResult {
  const [ready, setReady] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<string | null>(null);

  useEffect(() => {
    const check = (): boolean => {
      const el = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (el) {
        setReady(true);
        setCurrentLang(getCurrentLangFromCookie());
        return true;
      }
      return false;
    };

    if (!check()) {
      const id = setInterval(() => {
        if (check()) clearInterval(id);
      }, 200);
      return () => clearInterval(id);
    }
  }, []);

  const setLanguage = useCallback((lang: string) => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) return;
    select.value = lang;
    // Fire native change event so Google’s script reacts
    select.dispatchEvent(new Event("change"));
    setCurrentLang(lang);
  }, []);

  const reset = useCallback(() => {
    // Reset to original language: set to pageLanguage (en)
    setLanguage("en");
  }, [setLanguage]);

  return useMemo(
    () => ({ ready, currentLang, setLanguage, reset }),
    [ready, currentLang, setLanguage, reset]
  );
}
