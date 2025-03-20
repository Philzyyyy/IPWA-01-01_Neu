import { useState, useEffect } from "react";

function Navigation() {
  const [direction, setDirection] = useState("ltr"); // Standard: LTR

  useEffect(() => {
    // Browsersprache abrufen (z. B. "ar" für Arabisch)
    const userLang = navigator.language || navigator.userLanguage;

    // RTL-Sprachen definieren
    const rtlLanguages = ["ar", "he", "fa", "ur"];
    if (rtlLanguages.some((lang) => userLang.startsWith(lang))) {
      setDirection("rtl");
    }
  }, []);

  return (
    <>
      <nav
        className={`p-4 bg-gray-100 ${
          direction === "rtl" ? "text-right" : "text-left"
        }`}
      >
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="text-blue-600 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-blue-600 hover:underline">
              Über uns
            </a>
          </li>
          <li>
            <a href="#services" className="text-blue-600 hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-blue-600 hover:underline">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
