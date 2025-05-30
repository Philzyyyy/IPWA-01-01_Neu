import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Co2Table from "./Co2Tabelle";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import Impressum from "./Impressum";
import About from "./About";
import Services from "./Services";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navigation />

        <main className="flex-1 container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Co2Table />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
