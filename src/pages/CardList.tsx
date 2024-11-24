import React from "react";
import Card from "../components/Card";
import example1 from "../components/img/9.jpg";


const cardData = [
  {
    image: "https://via.placeholder.com/300x180",
    title: "JUST ONE MORE // Ep 9: Act III",
    category: "PEMBARUAN GAME",
    date: "21/10/2024",
    description: "Jajaran skin baru, Patch Akhir Tahun, dan masih banyak lagi di act terakhir COLLISION.",
  },
  {
    image: "example1",
    title: "Trailer Pengenalan Gameplay Vyse",
    category: "PEMBARUAN GAME",
    date: "23/08/2024",
    description: "Saksikan ahli taktik ulung, Vyse, beraksi sebelum ia rilis di Episode 09: Act II.",
  },
  {
    image: "https://via.placeholder.com/300x180",
    title: "Catatan Patch VALORANT 9.08",
    category: "PEMBARUAN GAME",
    date: "22/10/2024",
    description: "Pembaruan untuk Fakeout Yoru, ability Gekko, dan Sunset. Baru: Peta TDM Glitch.",
  },
];

const CardList: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">ARTIKEL TERBARU</h2>
          <button className="px-4 py-2 text-xl text-black hover:bg-red-600 rounded-lg transition">
            Lihat Semua Artikel
          </button>
        </div>
        {/* Card Section */}
        <div className="flex flex-wrap justify-center gap-6">
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
