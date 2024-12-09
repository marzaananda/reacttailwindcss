import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-50 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <div className="fade-in w-12 h-auto mr-3">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>

        {/* Menu button for mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navbar links for desktop */}
        <div className="hidden sm:flex space-x-4">
          <button
            onClick={() => scrollToSection("MainContent")}
            className="font-quantico text-lg text-white py-3 px-7 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("memori")}
            className="font-quantico text-lg text-white py-3 px-7 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded"
          >
            Memori
          </button>
          <button
            onClick={() => scrollToSection("page-home")}
            className="font-quantico text-lg text-white py-3 px-7 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded"
          >
            About
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 right-6 bg-gray-800 bg-opacity-90 rounded-md shadow-lg py-2">
          <button
            onClick={() => {
              scrollToSection("page-home");
              toggleMenu();
            }}
            className="font-quantico block px-7 py-3 text-white hover:bg-gray-700 rounded"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("page-home");
              toggleMenu();
            }}
            className="font-quantico block px-7 py-3 text-white hover:bg-gray-700 rounded"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("memori");
              toggleMenu();
            }}
            className="font-quantico block px-7 py-3 text-white hover:bg-gray-700 rounded"
          >
            Memori
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
