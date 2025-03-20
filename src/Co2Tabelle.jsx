import { useState } from "react";

const data = [
  { country: "Deutschland", emissions: 702, company: "German Energy AG" },
  { country: "USA", emissions: 4997, company: "American Power Inc." },
  { country: "China", emissions: 10365, company: "Beijing Industries Ltd." },
  { country: "Indien", emissions: 2654, company: "Tata Carbon Solutions" },
  { country: "Frankreich", emissions: 302, company: "Paris GreenTech" },
  { country: "Brasilien", emissions: 476, company: "Amazonas Oil & Gas" },
  { country: "Kanada", emissions: 589, company: "Maple Energy Corp." },
  { country: "Russland", emissions: 1740, company: "Siberian Fuel Co." },
  { country: "Japan", emissions: 1120, company: "Tokyo Energy Ltd." },
  { country: "Mexiko", emissions: 490, company: "Aztec Petroleum" },
  { country: "Südafrika", emissions: 470, company: "Johannesburg Power" },
  { country: "Australien", emissions: 400, company: "Kangaroo Energy Ltd." },
  { country: "Italien", emissions: 350, company: "Venice Carbon Works" },
  { country: "Südkorea", emissions: 680, company: "Seoul Energy Corp." },
  { country: "Indonesien", emissions: 630, company: "Bali Oil & Gas" },
  { country: "Spanien", emissions: 280, company: "Madrid Power Solutions" },
  { country: "Argentinien", emissions: 350, company: "Buenos Aires Energy" },
  {
    country: "Vereinigtes Königreich",
    emissions: 380,
    company: "London Carbon Ltd.",
  },
  {
    country: "Saudi-Arabien",
    emissions: 800,
    company: "Riyadh Petrochemicals",
  },
  { country: "Türkei", emissions: 450, company: "Ankara Green Fuels" },
  { country: "Polen", emissions: 320, company: "Warsaw Coal Industries" },
  { country: "Thailand", emissions: 290, company: "Bangkok Energy Co." },
  { country: "Vietnam", emissions: 310, company: "Hanoi Carbon Solutions" },
  { country: "Ägypten", emissions: 270, company: "Cairo Petrochemicals" },
  { country: "Iran", emissions: 740, company: "Tehran Energy Group" },
  { country: "Pakistan", emissions: 260, company: "Lahore Fuel Corp." },
  { country: "Philippinen", emissions: 240, company: "Manila Power Corp." },
  { country: "Malaysia", emissions: 220, company: "Kuala Lumpur Energy" },
  { country: "Kolumbien", emissions: 200, company: "Bogotá Oil & Gas" },
  { country: "Chile", emissions: 180, company: "Santiago Energy Ltd." },
];

function Co2Table() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Standard: aufsteigend

  const filteredData = data
    .filter(
      (item) =>
        item.country.toLowerCase().includes(search.toLowerCase()) ||
        item.company.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.country.localeCompare(b.country)
        : b.country.localeCompare(a.country)
    );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        CO₂-Emissionen nach Ländern
      </h2>

      {/* Filter-Input */}
      <input
        type="text"
        placeholder="Land oder Unternehmen durchsuchen..."
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sortier-Buttons */}
      <div className="flex justify-center mb-4">
        <button
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setSortOrder("asc")}
        >
          A-Z
        </button>
        <button
          className="px-4 py-2 mx-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          onClick={() => setSortOrder("desc")}
        >
          Z-A
        </button>
      </div>

      {/* Tabelle */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 border">Land</th>
              <th className="p-3 border">CO₂-Emissionen (Mt)</th>
              <th className="p-3 border">Unternehmen</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="text-center even:bg-gray-100">
                <td className="p-3 border">{item.country}</td>
                <td className="p-3 border">{item.emissions}</td>
                <td className="p-3 border">{item.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Co2Table;
