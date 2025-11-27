// NavBar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F9DBBD] shadow-md sticky top-0 z-50 w-full">
      <div className="w-full mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#A53860]">
          LETS<span className="text-[#450920]">COOK</span>
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#450920] text-2xl md:hidden transition-transform duration-300"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú */}
        <nav
          className={`${
            menuOpen ? "max-h-screen py-3" : "max-h-0"
          } md:max-h-none overflow-hidden absolute md:static left-0 top-full w-full md:w-auto 
          bg-[#FFA5AB] md:bg-transparent shadow-md md:shadow-none transition-all duration-500 
          flex flex-col md:flex-row md:items-center md:gap-6 text-center`}
        >
          <Link
            to="/"
            className="text-[#450920] font-semibold py-2 hover:text-[#DA627D]"
          >
            Inicio
          </Link>
          <Link
            to="/"
            className="text-[#450920] font-semibold py-2 hover:text-[#DA627D]"
          >
            Recetas
          </Link>
          <Link
            to="/"
            className="text-[#450920] font-semibold py-2 hover:text-[#DA627D]"
          >
            Postres destacados
          </Link>
        </nav>
      </div>
    </header>
  );
}
