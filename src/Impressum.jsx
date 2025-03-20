import React from "react";
import { Link } from "react-router-dom";

function Impressum() {
  return (
    <div className="">
      <div className="container mx-auto p-6 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Impressum</h1>

        <p>
          <strong>Angaben gemäß § 5 TMG:</strong>
        </p>
        <p>
          Carbon Metrics
          <br />
          Musterstraße 12
          <br />
          12345 Berlin
          <br />
          Deutschland
        </p>

        <h2 className="text-xl font-semibold mt-4">Vertreten durch:</h2>
        <p>Philipp Zybala</p>

        <h2 className="text-xl font-semibold mt-4">Kontakt:</h2>
        <p>
          Telefon: +49 30 1234567
          <br />
          E-Mail:{" "}
          <a href="mailto:info@co2-bilanz-info.de" className="text-blue-500">
            info@Carbon-Metrics.de
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-4">Registereintrag:</h2>
        <p>
          Registergericht: Amtsgericht Berlin
          <br />
          Registernummer: HRB 987654
        </p>

        <h2 className="text-xl font-semibold mt-4">Umsatzsteuer-ID:</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27a UStG: DE123456789</p>

        <h2 className="text-xl font-semibold mt-4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </h2>
        <p>
          Philipp Zybala
          <br />
          Musterstraße 12, 12345 Berlin
        </p>

        <h2 className="text-xl font-semibold mt-4">EU-Streitschlichtung:</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <br />
          <a
            href="https://ec.europa.eu/consumers/odr"
            className="text-blue-500"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          <br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 className="text-xl font-semibold mt-4">Haftungsausschluss:</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen.
        </p>

        <h2 className="text-xl font-semibold mt-4">Urheberrecht:</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>

        <p className="mt-6">
          <Link to="/" className="text-blue-500">
            Zurück zur Startseite
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Impressum;
