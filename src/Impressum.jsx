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
          Carbon Metrics e.V.
          <br />
          Musterstraße 12
          <br />
          10115 Berlin
          <br />
          Deutschland
        </p>

        <h2 className="text-xl font-semibold mt-4">Vertreten durch:</h2>
        <p>Max Mustermann (Vorstandsvorsitzender)</p>

        <h2 className="text-xl font-semibold mt-4">Kontakt:</h2>
        <p>
          Telefon: +49 (0)30 12345678
          <br />
          E-Mail:{" "}
          <a href="mailto:info@carbonmetrics.org" className="text-blue-500">
            info@carbonmetrics.org
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-4">Registereintrag:</h2>
        <p>
          Eintragung im Vereinsregister
          <br />
          Registergericht: Amtsgericht Berlin-Charlottenburg
          <br />
          Registernummer: VR 123456
        </p>

        <h2 className="text-xl font-semibold mt-4">Umsatzsteuer-ID:</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
          DE123456789
        </p>

        <h2 className="text-xl font-semibold mt-4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </h2>
        <p>
          Max Mustermann
          <br />
          Carbon Metrics e.V.
          <br />
          Musterstraße 12, 10115 Berlin
        </p>

        <h2 className="text-xl font-semibold mt-4">Haftungsausschluss:</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen.
        </p>

        <h2 className="text-xl font-semibold mt-4">Haftung für Links:</h2>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen.
        </p>

        <h2 className="text-xl font-semibold mt-4">Urheberrecht:</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet.
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
