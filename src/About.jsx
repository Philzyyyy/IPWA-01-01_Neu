import React from "react";

const About = () => {
  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4">Über uns</h1>
      <p className="text-gray-700">
        Carbon Metrics ist eine Non-Profit-Organisation, die sich für die
        Reduzierung von CO₂-Emissionen einsetzt. Unsere Mission ist es,
        Unternehmen und Privatpersonen bei der Erfassung und Analyse ihres
        CO₂-Fußabdrucks zu unterstützen.
      </p>
      <img
        src="Gruppenfoto_CarbonMetrics.png"
        alt="Gruppenfoto des CarbonMetrics Teams"
        className="mt-6"
      />
    </div>
  );
};

export default About;
