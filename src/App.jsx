import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Translator from "./pages/Translator";
import Generator from "./pages/Generator";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-pink-400">

        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">
            🚀 Smart Translator
          </h1>

          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Translator
            </Link>

            <Link to="/generator" className="text-gray-700 hover:text-indigo-600 font-medium">
              Generator
            </Link>
          </div>
        </nav>

        {/* Pages */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Translator />} />
            <Route path="/generator" element={<Generator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}