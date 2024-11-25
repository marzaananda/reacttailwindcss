import React, { useState } from 'react';
import TypingEffect from '../TypingEffect';
import useVideoVisibility from '../useVideoVisibility'


function Navbar() {
  const videoRef = useVideoVisibility('navbarVideo');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScrollToSection = () => {
    const targetSection = document.getElementById('home');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        id="navbarVideo"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vid01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay and Content */}
      <div className="relative z-10 bg-opacity-50 h-full flex flex-col items-center justify-center text-center text-white">
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-black bg-opacity-50">
          <div className="container mx-auto flex justify-between items-center px-4 py-2">
            <div className="fade-in w-12 h-auto mr-3">
              <a href="link">
                <img src="/logo.png" alt="logo" />
              </a>
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
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
                </svg>
              </button>
            </div>

            {/* Navbar links for desktop */}
            <div className="hidden sm:flex space-x-4">
              <a href="#navbar" className="text-lg text-white py-3 px-7 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">Home</a>
              <a href="#about" className="text-lg text-white py-3 px-7 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">About</a>
              <a href="#memori" className="text-lg text-white py-3 px-7 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">Memori</a>
            </div>
          </div>

          {/* Dropdown menu for mobile */}
          {isMenuOpen && (
            <div className="sm:hidden absolute top-16 right-6 bg-gray-800 bg-opacity-90 rounded-md shadow-lg py-2">
              <a href="#home" className="block px-7 py-3 text-white hover:bg-gray-700 rounded">Home</a>
              <a href="#about" className="block px-7 py-3 text-white hover:bg-gray-700 rounded">About</a>
              <a href="#memori" className="block px-7 py-3 text-white hover:bg-gray-700 rounded">Memori</a>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div id='navbar' className="font-nunito text-white-900 flex flex-col items-center justify-center min-h-screen">
          <TypingEffect
            headingText="Welcome to My Website"
            paragraphText="Kamu punya cara yang unik untuk menghargai masa lalu."
            speed={100}
            delayBetweenTexts={1500} />
          <button 
          onClick={handleScrollToSection} 
          className="px-6 py-2 mt-4 bg-black text-white transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">
            Mau lihat?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;