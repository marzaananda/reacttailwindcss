import React from "react";
import useVideoVisibility from "../useVideoVisibility";
import LazyVideo from "../LazyVideo";

const Home: React.FC = () => {
  const videoRef = useVideoVisibility("homeVideo");

  return (
    <div
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-4 min-h-screen bg-gray-100 p-4 sm:p-6"
    >
      {/* Section Kiri - Teks */}
      <div className="text-center lg:text-left space-y-4">
        <h1 className="font-quantico text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-wide">
          TONTON SEKARANG
        </h1>
        <p className="font-quantico text-lg sm:text-xl text-gray-700">
          PATALI SARAGA 
          <br />
          Drama Film Karya IPA 1
        </p>
        <a href="https://www.youtube.com/watch?v=a4ngVyAL1pU&list=LL&index=127">
          <button className="font-quantico px-6 py-2 bg-black text-white hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 rounded shadow-md transition mt-6">
            Mau lihat?
          </button>
        </a>
      </div>

      {/* Section Kanan - Video */}
      <div className="flex justify-center">
        <LazyVideo
          videoId="homeVideo"
          videoSrc="/ipa1.mp4"
          className="w-full max-w-lg shadow-lg rounded"
        />
      </div>
    </div>
  );
};

export default Home;
