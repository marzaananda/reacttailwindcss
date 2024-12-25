import React from "react";
import useVideoVisibility from '../useVideoVisibility'
import LazyVideo from "../LazyVideo";


const Home : React.FC =() => {
  const videoRef = useVideoVisibility('homeVideo');

    return (
        <div id="home" className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-8 space-y-8 lg:space-y-0 lg:space-x-8">
      
        {/* Section Kiri - Teks Besar */}
        <div className="flex-1 container mx-auto px-6 py-10 text-center lg:text-left ">
          <h1 className="font-quantico text-5xl lg:text-7xl font-bold text-black tracking-wide">
            TONTON SEKARANG
          </h1>
          <p className="font-quantico mt-4 text-gray-700 text-lg">
            PATALI SARAGA 
            Drama Film Karya IPA 1
          </p>
          <a href="https://www.youtube.com/watch?v=a4ngVyAL1pU&list=LL&index=127"><button className="font-quantico px-6 py-2 mt-4 bg-black text-white transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded">
            Mau lihat?
          </button></a>
        </div>
        
        {/* Section Kanan - Gambar/Video */}
        <div className="mt-8 sm:mt-12 flex justify-center">
        <LazyVideo
          videoId="homeVideo"
          videoSrc="/ipa1.mp4"
          className="w-full max-w-xl sm:max-w-sm md:max-w-lg lg:max-w-xl shadow-xl rounded"
        />
        </div>
        
      </div>

    )
}

export default Home;