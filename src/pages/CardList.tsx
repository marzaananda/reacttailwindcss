import React from "react";
import Card from "./Card";
import { Link } from 'react-router-dom';
import image1 from "../components/img/IMG_(1).jpg";
import image2 from "../components/img/IMG_(4).jpg";
import image3 from "../components/img/IMG_(3).jpg";
import image4 from "../components/img/IMG_(5).jpg";

const cardData = [
  {
    image: image1, // Menggunakan gambar lokal
    title: "PRAKTEK KIMIA XI IPA 1",
    category: "Kimia",
    date: "Agustus 2022",
    description: "beritahu saya jika punya deskripsi",
  },
  {
    image: image2, // Menggunakan gambar lokal
    title: "STUDY TOUR 2022",
    category: "Candi Prambanan",
    date: "5 Oktober 2022",
    description: "Beritahu saya jika punya deskripsi",
  },
  {
    image: image3, // Menggunakan gambar lokal
    title: "STUDY TOUR 2022",
    category: "Candi Prambanan",
    date: "5 Oktober 2022",
    description: "Beritahu saya jika punya deskripsi",
  },
  {
    image: image4, // Menggunakan gambar lokal
    title: "Praktik Manasik Haji 2023",
    category: "Manasik Haji",
    date: "14 Agustus 2023",
    description: "Beritahu saya jika punya deskripsi",
  },
];

const CardList: React.FC = () => {
  return (
    <div id="memori" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-quantico text-2xl font-bold">KENANGAN TERBARU</h2>
          <Link to="/all-memories">
          <button className="font-quantico px-4 py-2 text-sm text-black hover:bg-red-600 rounded-lg transition">
            Lihat Semua kenangan
          </button>
          </Link>
        </div>
        {/* Card Section */}
        <div className="font-quantico flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              category={card.category}
              date={card.date}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
