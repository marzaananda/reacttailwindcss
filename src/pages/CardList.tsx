import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Card from "../components/Card";
import { postData } from "./Data/postData";
import CommentHP from "./comments/CommentHP";
import CommentPC from "./comments/CommentPc";
import DropdownMenu from "./Data/DropdownMenu";
import { useNavigate } from "react-router-dom";

const CardList: React.FC = () => {
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);
  const [likes, setLikes] = useState<number[]>(postData.map(() => 0));
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isCommentVisible, setIsCommentVisible] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  
  const navigate = useNavigate();

  const openModal = (index: number) => {
    setSelectedPostIndex(index);
  };

  const handleLike = (index: number) => {
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Kenangan Sekolah",
          text: "Lihat postingan menarik ini!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Gagal membagikan:", error);
      }
    } else {
      alert("Fitur berbagi tidak didukung di browser ini.");
    }
  };

  const handleEdit = () => {
    (() => {
      navigate("/add-post");
      setIsDropdownOpen(false);
    });
  };
  

  const handleDelete = () => {
    (() => {
      if (window.confirm("Apakah Anda yakin ingin menghapus postingan ini?")) {
        console.log("Post dihapus");
      }
      setIsDropdownOpen(false);
    });
  };
  

  const isMobile = window.innerWidth <= 768;

  return (

    <div id="memori" className="bg-gray-100">
      {/* Card List */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-quantico text-2xl md:text-3xl font-bold">Kenangan Terbaru</h2>
          <button
            onClick={() => navigate("/all-memories")}
            className="font-quantico bg-red-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-black transition"
          >
            Lihat Semua Kenangan
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {postData.map((post, index) => (
            <Card
              key={post.id}
              imageUrl={post.mainImage}
              title={post.title}
              summary={post.description}
              onClick={() => openModal(index)}
              id={post.id} 
            />
          ))}
        </div>
      </section>

      {/* Modal (Menggunakan gaya dari AllMemories) */}
      {selectedPostIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-6 shadow-xl w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => {
                setSelectedPostIndex(null);
                setIsExpanded(false);
                setIsCommentVisible(false);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-2 right-10">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-500 hover:text-gray-800"
              >
                ⚙
              </button>
              <DropdownMenu
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                options={[
                  { label: "Edit", onClick: handleEdit },
                  { label: "Delete", onClick: handleDelete },
                ]}
              />
            </div>

            {/* Swiper */}
            <Swiper modules={[Pagination]} pagination={{ clickable: true }} className="w-full h-[400px] mb-4">
              <SwiperSlide>
                <img
                  src={postData[selectedPostIndex].mainImage}
                  alt="Main"
                  className="w-full h-[300px] md:h-[400px] object-contain rounded-md p-4"
                />
              </SwiperSlide>
              {postData[selectedPostIndex].additionalImages.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={image}
                    alt={`Additional ${idx + 1}`}
                    className="w-full h-[300px] md:h-[400px] object-contain rounded-md p-4"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Konten */}
            <h2 className="font-quantico text-xl font-bold mb-2">
              {postData[selectedPostIndex].title}
            </h2>
            <p className="font-quantico text-gray-500 text-sm mb-4">
              {isExpanded
                ? postData[selectedPostIndex].description
                : `${postData[selectedPostIndex].description.slice(0, 150)}...`}
            </p>
            {postData[selectedPostIndex].description.length > 150 && (
              <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-500 hover:underline text-sm">
                {isExpanded ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
              </button>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CardList;