import React from "react";

const Services = () => {
  return (
    <div className="text-center p-6 text-gray-700">
      <h1 className="text-2xl font-bold mb-4">Unsere Services</h1>
      <p>
        Möchten Sie die CO₂-Emissionen Ihres Unternehmens transparent und
        datenbasiert erfassen? CarbonMetrics bietet Ihnen eine professionelle
        Analyse Ihrer CO₂-Bilanz.
      </p>
      <br />
      <ul className="list-none text-left mx-auto max-w-lg">
        <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500">
          <strong>Detaillierte Emissionsanalyse</strong> – Ermittlung der
          CO₂-Quellen in Ihrem Unternehmen
        </li>
        <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500">
          <strong>Individuelle Beratung</strong> – Maßgeschneiderte Lösungen zur
          Reduzierung Ihres CO₂-Fußabdrucks
        </li>
        <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-green-500">
          <strong>Zukunftssichere Nachhaltigkeitsstrategien</strong> – Erfüllen
          Sie Umweltstandards und steigern Sie Ihre Wettbewerbsfähigkeit
        </li>
      </ul>
      <br />
      <p>
        <strong>Jetzt CO₂-Analyse anfordern!</strong> Kontaktieren Sie uns für
        ein unverbindliches Erstgespräch. 📩 info@Carbon-Metrics.de | 🌍
        Nachhaltigkeit beginnt mit Daten!
      </p>
    </div>
  );
};

export default Services;
