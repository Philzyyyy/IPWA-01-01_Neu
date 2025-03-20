import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <nav
      className={`p-4 bg-gray-100 ${
        direction === "rtl" ? "text-right" : "text-left"
      }`}
    >
      <ul
        className={`flex ${
          direction === "rtl" ? "flex-row-reverse" : "flex-row"
        } gap-6`}
      >
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-600 hover:underline">
            Über uns
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-blue-600 hover:underline">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
