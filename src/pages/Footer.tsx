import React from 'react';
import { FaYoutube, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logof.png" alt="Logo" className="h-12" /> {/* Ganti dengan path logo kamu */}
          <h1 className="font-quantico p-2 font-bold ml-2 text-lg">EXPOSE ONE</h1>
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-4">
          <a href="https://www.youtube.com/@ExposeOne-1" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-6 h-6 text-black hover:text-gray-600 transition-colors" />
          </a>
          <a href="https://github.com/marzaananda/reacttailwindcss" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-black hover:text-gray-600 transition-colors" />
          </a>
          <a href="https://www.instagram.com/expos1_class/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-black hover:text-gray-600 transition-colors" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="font-quantico text-center mt-4 text-sm text-gray-500">
        ©Copyright.2022 by Expose One
      </div>
    </footer>
  );
};

export default Footer;
