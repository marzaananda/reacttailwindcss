import React from 'react';
import TypingEffect from '../TypingEffect';
import useVideoVisibility from '../useVideoVisibility';
import LazyVideo from '../LazyVideo';

const MainContent: React.FC = () => {
  const videoRef = useVideoVisibility('navbarVideo');

  const handleScrollToSection = () => {
    const targetSection = document.getElementById('home');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='MainContent' className="relative h-screen w-full">
      {/* Video Background */}
      <LazyVideo
      videoId="navbarVideo"
      videoSrc="/Vid01.mp4"  // Menggunakan path relatif dari folder public
      className="absolute inset-0 w-full h-full object-cover z-0"
        />

      {/* Overlay and Content */}
      <div className="relative z-10 bg-opacity-50 h-full flex flex-col items-center justify-center text-center text-white">
        <div id="navbar" className="font-quantico text-white-900 flex flex-col items-center justify-center min-h-screen">
          <TypingEffect
            headingText="Selamat datang"
            paragraphText="Kamu punya cara yang unik untuk menghargai masa lalu."
            speed={100}
            delayBetweenTexts={1500}
          />
          <button
            onClick={handleScrollToSection}
            className="font-quantico px-6 py-2 mt-4 bg-black text-white transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded"
          >
            Mau lihat?
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
