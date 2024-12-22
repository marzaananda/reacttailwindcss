import React from 'react';
import topImage from "/img/poto1.jpg";
import bottomImage from "/img/poto2.jpg";

const ManasikHaji: React.FC = () => {
  return (
    <div className="bg-grey-100 text-white min-h-screen">
    {/* Hero Image */}
    <div className="relative w-full h-[450px]">
      <img
        src="/img/poto2.jpg" // Ganti dengan path gambar Anda
        alt="Valorant Champions 2025"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="font-quantico text-4xl font-bold text-white text-center">
          VALORANT CHAMPIONS TOUR 2025
        </h1>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-5xl mx-auto p-6">
      {/* Title */}
      <h2 className="text-black font-bold text-3xl font-quantico text-center my-6">
        VCT 2025 Season Start: EYTNTK
      </h2>
      <p className="font-quantico text-center text-black mb-8">
        Cari tahu informasi lengkap Season Start VCT 2025!
      </p>

      {/* Article Text */}
      <p className="text-black font-quantico mb-6 leading-relaxed">
        Musim baru kompetisi VALORANT VCT 2025 siap dimulai! Kali ini dengan lebih banyak tim,
        format turnamen yang diperbarui, dan hadiah yang lebih besar dari sebelumnya. Event ini
        akan dimulai pada Januari dan mencakup wilayah seperti EMEA, PACIFIC, dan AMERICA.
      </p>
      <p className="text-black font-quantico mb-6 leading-relaxed">
        Pastikan Anda mendukung tim favorit Anda dan ikuti terus setiap pertandingan seru selama
        musim ini berlangsung.
      </p>

      {/* Image Section */}
      <div className="my-8">
        <img
          src="/img/poto2.jpg" // Ganti dengan path gambar tim
          alt="Tim VCT 2025"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Key Points */}
      <h3 className="text-2xl font-quantico font-bold text-black mb-4">Informasi Penting:</h3>
      <ul className="font-quantico list-disc list-inside text-black space-y-2 mb-6">
        <li>Event dimulai pada Januari 2025</li>
        <li>Format baru yang lebih kompetitif</li>
        <li>Hadiah lebih besar dari sebelumnya</li>
        <li>Partisipasi tim baru dari seluruh dunia</li>
      </ul>

      {/* Schedule Image */}
      <div>
        <img
          src="/img/poto1.jpg" // Ganti dengan path gambar jadwal
          alt="Jadwal Pertandingan"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
  );
};

export default ManasikHaji;
