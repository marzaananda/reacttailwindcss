import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginModal from "./LoginModal"; // Import komponen LoginModal

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State untuk modal login
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollOrNavigate = (path: string, id?: string) => {
    if (location.pathname === path && id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.location.href = path;
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-50 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <div className="fade-in w-12 h-auto mr-3">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>

        {/* Menu */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
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

        {/* Navbar */}
        <div className="hidden sm:flex space-x-4">
          <button
            onClick={() => handleScrollOrNavigate("/", "MainContent")}
            className="font-quantico text-lg text-white py-3 px-7 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollOrNavigate("/", "memori")}
            className="font-quantico text-lg text-white py-3 px-7 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded"
          >
            Memori
          </button>
          <button
            onClick={() => handleScrollOrNavigate("/", "page-home")}
            className="font-quantico text-lg text-white py-3 px-7 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded"
          >
            About
          </button>
          <button
            onClick={() => setIsLoginModalOpen(true)} // Buka modal login
            className="font-quantico text-lg text-white py-3 px-7 bg-black transition transform hover:scale-105 hover:bg-gray-500 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded"
          >
            Login
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 right-6 bg-gray-800 bg-opacity-90 rounded-md shadow-lg py-2">
          <button
            onClick={() => {
              handleScrollOrNavigate("/", "MainContent");
              toggleMenu();
            }}
            className="font-quantico block px-7 py-3 text-white hover:bg-gray-700 rounded"
          >
            Home
          </button>
          <button
            onClick={() => {
              handleScrollOrNavigate("/", "memori");
              toggleMenu();
            }}
            className="font-quantico block px-7 py-3 text-white hover:bg-gray-700 rounded"
          >
            Memori
          </button>
          <button
            onClick={() => {
              handleScrollOrNavigate("/", "page-home");
              toggleMenu();
            }}
            className="font-quantico block px-7 py-3 text-white hover:bg-gray-700 rounded"
          >
            About
          </button>
        </div>
      )}

      {/* Modal Login */}
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
