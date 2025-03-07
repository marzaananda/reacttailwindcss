import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig"; // Import Firebase Auth
import { onAuthStateChanged, signOut } from "firebase/auth";
import LoginModal from "./LoginModal"; // Import komponen LoginModal
import { doc, updateDoc } from "firebase/firestore";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // State untuk cek login admin
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Cek status login admin saat komponen dimuat
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdminLoggedIn(!!user); // Jika ada user, berarti admin login
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      const adminRef = doc(db, "admins", "admin");
      await updateDoc(adminRef, { isLoggedIn: true });
  
      await signOut(auth); // Logout dari Firebase
      setIsAdminLoggedIn(true);
      navigate("/"); // Arahkan ke halaman utama setelah logout
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };
  
  // Logout otomatis jika tab ditutup
  useEffect(() => {
    const handleUnload = async () => {
      if (isAdminLoggedIn) {
        const adminRef = doc(db, "admins", "admin");
        await updateDoc(adminRef, { isLoggedIn: false });
      }
    };
  
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [isAdminLoggedIn]);
  

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
          {isAdminLoggedIn ? (
            <button
              onClick={handleLogout}
              className="font-quantico text-lg text-white py-3 px-7 bg-red-500 transition transform hover:scale-105 hover:bg-red-600 active:scale-95 active:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="font-quantico text-lg text-white py-3 px-7 bg-black transition transform hover:scale-105 hover:bg-gray-500 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded"
            >
              Login
            </button>
          )}
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
          {isAdminLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="font-quantico block px-7 py-3 text-white bg-red-500 hover:bg-red-600 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoginModalOpen(true);
                toggleMenu();
              }}
              className="font-quantico block px-7 py-3 text-white bg-black hover:bg-gray-500 rounded"
            >
              Login
            </button>
          )}
        </div>
      )}

      {/* Modal Login */}
      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;
