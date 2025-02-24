// CardList.tsx
import React, { useState } from "react";
import Card from "./Card";
import PostModal from "./post/PostModal"; // Pastikan path ini benar
import image1 from "/img/IMG_2.jpg";
import image2 from "/img/IMG_4.jpg";
import image3 from "/img/IMG_5.jpg";
import image4 from "/img/IMG_6.jpg";
import { Link } from 'react-router-dom';
import { postData  } from "./Data/postData";


const initialCardData = [
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



  function openModal(post: { id: string; mainImage: string; additionalImages: string[]; title: string; category: string; date: string; description: string; }): void {
    throw new Error("Function not implemented.");
  }

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
        {postData.map((post) => (
  <Card
    key={post.id}
    image={post.mainImage}
    title={post.title}
    category={post.category}
    date={post.date}
    description={post.description}
    onClick={() => openModal(post)}
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
    images={[selectedPost.mainImage, ...selectedPost.additionalImages]}
    title={selectedPost.title}
    description={selectedPost.description}
    date={selectedPost.date}
    username="Nama Pengguna"
    userImage="/path-to-user-image.jpg"
    onDelete={() => handleDeletePost(selectedPost.title)}
  />
)}

    </div>
  );
};

export default CardList;
