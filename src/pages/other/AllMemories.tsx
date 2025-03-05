import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Card from "../../components/Card";
import { postData } from "../Data/postData";
import CommentHP from "../comments/CommentHP";
import CommentPC from "../comments/CommentPc";
import DropdownMenu from "../Data/DropdownMenu";
import { useNavigate } from "react-router-dom";
import { handleAdminAction } from "../../utils/adminCheck";

const AllMemories: React.FC = () => {
  const [selectedArticleIndex, setSelectedArticleIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [likes, setLikes] = useState<number[]>(postData.map(() => 0));
  const [isCommentVisible, setIsCommentVisible] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const navigate = useNavigate(); // Inisialisasi navigasi

  const openModal = (index: number) => {
    setSelectedArticleIndex(index);
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
    handleAdminAction(() => {
      navigate("/add-post");
      setIsDropdownOpen(false);
    });
  };
  

  const handleDelete = () => {
    handleAdminAction(() => {
      if (window.confirm("Apakah Anda yakin ingin menghapus postingan ini?")) {
        console.log("Post dihapus");
      }
      setIsDropdownOpen(false);
    });
  };
  

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url(/img/hero-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center text-left h-full px-4">
          <h1 className="text-white font-quantico text-4xl md:text-6xl font-bold mb-4">
            Berita Terbaru
          </h1>
          <p className="text-white font-quantico text-lg md:text-xl max-w-3xl">
            Temukan kenangan dan kabar terbaru yang menarik untukmu.
          </p>
        </div>
      </section>

      {/* Card List */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="font-quantico text-2xl md:text-3xl font-bold mb-8">
          Berita Populer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {postData.map((post, index) => (
            <Card
              key={post.id}
              imageUrl={post.mainImage} // Sesuai dengan prop yang benar di CardProps
              title={post.title}
              summary={post.description} // Sesuai dengan prop summary di CardProps
              onClick={() => openModal(index)} id={0}            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedArticleIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-6 shadow-xl w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => {
                setSelectedArticleIndex(null);
                setIsExpanded(false);
                setIsCommentVisible(false);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            {/* Dropdown Menu Button */}
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
                  src={postData[selectedArticleIndex].mainImage}
                  alt="Main"
                  className="w-full h-[300px] md:h-[400px] object-contain rounded-md p-4"
                />
              </SwiperSlide>
              {postData[selectedArticleIndex].additionalImages.map((image, idx) => (
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
              {postData[selectedArticleIndex].title}
            </h2>
            <p className="font-quantico text-gray-500 text-sm mb-4">
              {isExpanded
                ? postData[selectedArticleIndex].description
                : `${postData[selectedArticleIndex].description.slice(0, 150)}...`}
            </p>
            {postData[selectedArticleIndex].description.length > 150 && (
              <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-500 hover:underline text-sm">
                {isExpanded ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
              </button>
            )}

            {/* Tombol Interaksi */}
            <div className="flex justify-around mt-4">
              <button onClick={() => handleLike(selectedArticleIndex)} className="flex items-center gap-2 text-gray-600 hover:text-red-600">
                ❤ {likes[selectedArticleIndex]} Like
              </button>
              <button onClick={() => setIsCommentVisible(!isCommentVisible)} className="text-gray-600 hover:text-blue-600">
                💬 Comment
              </button>
              <button onClick={handleShare} className="text-gray-600 hover:text-green-600">
                ↗ Share
              </button>
            </div>

            {/* Komentar */}
            {isCommentVisible && (
  isMobile ? (
    <CommentHP isOpen={isCommentVisible} onClose={() => setIsCommentVisible(false)} />
  ) : (
    <CommentPC isOpen={isCommentVisible} onClose={() => setIsCommentVisible(false)} />
  )
)}

          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AllMemories;
