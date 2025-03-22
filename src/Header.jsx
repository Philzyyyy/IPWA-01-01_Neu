import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white py-4 shadow-md">
      <div className="container flex items-center px-6">
        {/* Logo und Titel */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <img
              src="Frame 2.svg"
              alt="CarbonMetrics Logo"
              className="h-16 w-auto transition-transform duration-200 hover:scale-110"
            />
          </Link>
          <h1 className="text-2xl font-bold">Carbon Metrics</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
