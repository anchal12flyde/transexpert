"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

// Extract current language from cookie
function getCurrentLangFromCookie(): string | null {
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
    select.dispatchEvent(new Event("change")); // Trigger Google Translate
    setCurrentLang(lang);
  }, []);

  const reset = useCallback(() => {
    setLanguage("en"); // Reset to default language
  }, [setLanguage]);

  return useMemo(
    () => ({ ready, currentLang, setLanguage, reset }),
    [ready, currentLang, setLanguage, reset]
  );
}
