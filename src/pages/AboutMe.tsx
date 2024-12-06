import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className=" py-20 mt-20 fade-in-element">
      <div className="container mx-auto flex items-center space-x-10">
        <div className="circle-container">
          <img src="/img/waifu gua.png" alt="Profile Picture" className="w-full h-full object-cover" />
        </div>
        <div id="about-content">
          <h1 id="introduction" className="text-baru text-3xl font-semibold mb-4">HI!!.. Aku Muhammad Marza Ananda</h1>
          <h2 id="about-heading" className="text-xl mb-2">Tentang Saya</h2>
          <p id="about-paragraph" className="mb-4">
            <br />Aku adalah seorang yang suka main komputer :) Sebagai seorang yang tertarik pada pengembangan web dan dunia kreatif, saya memiliki minat besar dalam bidang frontend development serta editing konten.
          </p>
          <p id="about-paragraph-new" className="mb-4">
            Saya memiliki pengalaman dalam frontend development menggunakan HTML, CSS, JavaScript, dan React, dengan fokus pada pembuatan antarmuka yang interaktif dan responsif. Saya juga sangat memperhatikan desain yang mudah diakses oleh semua pengguna. Sebagai editor, saya berpengalaman mengelola konten, mengedit artikel, video, dan gambar menggunakan Adobe Photoshop, Premiere Pro, dan Figma. Keahlian ini memungkinkan saya untuk menghasilkan karya yang detail dan berkualitas, baik dalam pengembangan maupun penyuntingan.
          </p>
          <button id="btn-id" className="bg-black text-white py-3 px-6 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">Bahasa Indonesia</button>
          <button id="btn-en" className="bg-black text-white py-3 px-6 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">English</button>
          <button id="btn-es" className="bg-black text-white py-3 px-6 transition transform hover:scale-105 hover:bg-gray-400 active:scale-95 active:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">Español</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
