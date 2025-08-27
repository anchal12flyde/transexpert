"use client";
import UseGoogleTranslate from "./customGoogleTranslator";

export function LanguageMenu() {
  const { ready, currentLang, setLanguage } = UseGoogleTranslate();

  if (!ready) return null;

  return (
    <select
      value={currentLang ?? "en"}
      onChange={(e) => setLanguage(e.target.value)}
      className="border rounded px-2 py-1"
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="fr">Français</option>
    </select>
  );
}
