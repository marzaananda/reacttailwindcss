import React from 'react';
import TypingEffect from '../TypingEffect';

const Navbar: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="public/vid01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay and Content */}
      <div className="relative z-10 bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-center text-white">
        {/* Navbar */}
        <nav className="fixed top-0 w-full flex justify-between items-center p-6">
          <div className="fade-in w-11 h-auto mr-3"><a href="link"><img src="public/logo.png" alt="logo" /></a></div>
          <div className="space-x-8">
            <a href="#home" className=" text-white py-3 px-6 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">Home</a>
            <a href="#about" className=" text-white py-3 px-6 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">About</a>
            <a href="#memori" className=" text-white py-3 px-6 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">Memori</a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="font-nunito text-white-900 flex flex-col items-center justify-center min-h-screen">
      <TypingEffect
        headingText="Welcome to My Website"
        paragraphText="Kamu punya cara yang unik untuk menghargai masa lalu."
        speed={100}
        delayBetweenTexts={1500}
      />
      <button className="px-6 py-2 mt-4 text-white transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">
              Mau lihat?
            </button>
    </div>
      </div>
    </div>
  );
}

export default Navbar;
