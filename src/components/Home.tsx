import React from "react";
import useVideoVisibility from '../useVideoVisibility'


const Home : React.FC =() => {
  const videoRef = useVideoVisibility('homeVideo');

    return (
        <div id="home" className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-8 space-y-8 lg:space-y-0 lg:space-x-8">
      
        {/* Section Kiri - Teks Besar */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-black tracking-wide">
            TONTON SEKARANG
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Kamu punya cara yang unik untuk menghargai masa lalu.
          </p>
          <a href="#"><button className="px-6 py-2 mt-4 bg-black text-white transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">
            Mau lihat?
          </button></a>
        </div>
        
        {/* Section Kanan - Gambar/Video */}
        <div className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-black-500/40 rounded-lg overflow-hidden">
        <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        id="homeVideo"
        className=""
      >
        <source src="./public/ipa1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        
      </div>

    )
}

export default Home;