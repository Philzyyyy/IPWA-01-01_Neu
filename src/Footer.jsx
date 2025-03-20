import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-8">
      <p className="text-gray-600">
        &copy; 2025 Carbon Metrics. Alle Rechte vorbehalten.
      </p>
      <p className="mt-2">
        <Link to="/impressum" className="text-blue-500 hover:underline">
          Impressum
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
