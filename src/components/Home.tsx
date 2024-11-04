import React from "react";

const Home : React.FC =() => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-8 space-y-8 lg:space-y-0 lg:space-x-8">
      
        {/* Section Kiri - Teks Besar */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-black tracking-wide">
            TONTON SEKARANG
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Kamu punya cara yang unik untuk menghargai masa lalu.
          </p>
        </div>
        
        {/* Section Kanan - Gambar/Video */}
        <div className="flex-1 flex justify-center items-center">
          <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full lg:w-3/4 object-cover shadow-lg"
          >
            <source src="./ipa1.mp4" type="video.mp4"/>
          </video>
        </div>
        
      </div>

    )
}

export default Home;