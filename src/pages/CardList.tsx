import React, { useState } from "react";
import Card from "./Card";
import PostModal from "./post/PostModal"; // Import PostModal
import { Link } from 'react-router-dom';
import image1 from "/img/IMG_2.jpg";
import image2 from "/img/IMG_4.jpg";
import image3 from "/img/IMG_5.jpg";
import image4 from "/img/IMG_6.jpg";

const cardData = [
  { 
    id: 1,
    image: image1,
    title: "PRAKTEK KIMIA XI IPA 1",
    category: "Kimia",
    date: "Agustus 2022",
    description: "Beritahu saya jika punya deskripsi",
  },
  { 
    id: 2,
    image: image2,
    title: "STUDY TOUR 2022",
    category: "Candi Prambanan",
    date: "5 Oktober 2022",
    description: "Beritahu saya jika punya deskripsi",
  },
  { 
    id: 3,
    image: image3,
    title: "STUDY TOUR 2022",
    category: "Candi Prambanan",
    date: "5 Oktober 2022",
    description: "Beritahu saya jika punya deskripsi",
  },
  { 
    id: 4,
    image: image4,
    title: "Praktik Manasik Haji 2023",
    category: "Manasik Haji",
    date: "14 Agustus 2023",
    description: "Beritahu saya jika punya deskripsi",
  },
];

const CardList: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card: any) => setSelectedCard(card);
  const closeModal = () => setSelectedCard(null);

  return (
    <div id="memori" className="bg-gray-100 py-10">
      <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
          <h2 className="font-quantico text-2xl font-bold">KENANGAN TERBARU</h2>
          <Link to="/all-memories">
            <button className="font-quantico px-4 py-2 text-sm text-black hover:bg-red-600 rounded-lg transition">
              Lihat Semua Kenangan
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card) => (
            <Card 
              key={card.id}
              {...card} 
              onClick={() => openModal(card)} 
            />
          ))}
        </div>
      </div>

      {/* Modal untuk Post */}
      {selectedCard && (
        <PostModal 
          card={selectedCard} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default CardList;
