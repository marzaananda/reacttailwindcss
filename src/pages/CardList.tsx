// CardList.tsx
import React, { useState } from "react";
import Card from "./Card";
import PostModal from "./post/PostModal"; // Pastikan path ini benar
import image1 from "/img/IMG_2.jpg";
import image2 from "/img/IMG_4.jpg";
import image3 from "/img/IMG_5.jpg";
import image4 from "/img/IMG_6.jpg";
import { Link } from 'react-router-dom';

const initialCardData = [
  {
    images: [image1, image2], // Array gambar untuk Swiper
    title: "PRAKTEK KIMIA XI IPA 1",
    category: "Kimia",
    date: "Agustus 2022",
    description: "Beritahu saya jika punya deskripsi",
  },
  {
    images: [image3],
    title: "STUDY TOUR 2022",
    category: "Candi Prambanan",
    date: "5 Oktober 2022",
    description: "Beritahu saya jika punya deskripsi",
  },
  {
    images: [image4],
    title: "Praktik Manasik Haji 2023",
    category: "Manasik Haji",
    date: "14 Agustus 2023",
    description: "Beritahu saya jika punya deskripsi",
  },
];

const CardList: React.FC = () => {
  const [cardData, setCardData] = useState(initialCardData);
  const [selectedPost, setSelectedPost] = useState<typeof cardData[0] | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const handleCardClick = (post: typeof cardData[0]) => {
    setSelectedPost(post); // Atur postingan yang dipilih
  };

  const handleDeletePost = (postTitle: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus postingan ini?")) {
      setCardData((prevData) => prevData.filter((post) => post.title !== postTitle));
      setSelectedPost(null);
      setNotification("Postingan berhasil dihapus!");
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <div id="memori" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-quantico text-2xl font-bold">KENANGAN TERBARU</h2>
          <Link to="/all-memories">
            <button className="font-quantico px-4 py-2 text-sm text-black hover:bg-red-600 rounded-lg transition">
              Lihat Semua Kenangan
            </button>
          </Link>
        </div>
        {/* Card Section */}
        <div className="font-quantico flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.images[0]} // Gambar pertama dari array
              title={card.title}
              category={card.category}
              date={card.date}
              description={card.description}
              onClick={() => handleCardClick(card)} // Tambahkan onClick
            />
          ))}
        </div>
      </div>

      {/* Notifikasi */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}

      {/* Modal */}
      {selectedPost && (
        <PostModal
          onClose={() => setSelectedPost(null)}
          images={selectedPost.images}
          title={selectedPost.title}
          description={selectedPost.description}
          date={selectedPost.date}
          username=""
          userImage=""
          onDelete={() => handleDeletePost(selectedPost.title)}
        />
      )}
    </div>
  );
};

export default CardList;
