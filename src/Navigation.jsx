import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const userLang = "navigator.language || navigator.userLanguage;";
    const rtlLanguages = ["ar", "he", "fa", "ur"];
    if (rtlLanguages.some((lang) => userLang.startsWith(lang))) {
      setDirection("rtl");
    }
  }, []);

  return (
    <nav className="bg-gray-100 py-2 shadow-md">
      <div
        className={`container flex px-6 ${
          direction === "rtl" ? "justify-end" : "justify-start"
        }`}
      >
        <ul className="flex gap-6">
          <li>
            <Link
              to="/"
              className="text-gray-900 text-opacity-80 backdrop-blur-md hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-900 text-opacity-80 backdrop-blur-md hover:underline"
            >
              Über uns
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-900 text-opacity-80 backdrop-blur-md hover:underline"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
