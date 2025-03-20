function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-20">
          <img
            src="CarbonMetric-Logo.png"
            alt="CarbonMetrics Logo"
            className="h-12 w-auto"
          />
          <h1 className="text-2xl font-bold">Carbon Metrics</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
