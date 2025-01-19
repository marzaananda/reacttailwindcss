import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommentHP from "../comments/CommentHP";
import CommentPC from "../comments/CommentPc";
import profileImage from "/logo.png"


interface PostModalProps {
  images: string[];
  username: string;
  userImage?: string;
  title: string;
  description: string;
  date: string;
  onClose: () => void;
}


const PostModal: React.FC<PostModalProps> = ({images,username, userImage, title,description,date,onClose,}) => {
  const [isCommentVisible, setIsCommentVisible] = useState(false); // Untuk mengontrol komentar

  const handleCommentToggle = () => {
    setIsCommentVisible(!isCommentVisible);
  };

  const isMobile = window.innerWidth <= 768; // Deteksi perangkat mobile
  const [likes, setLikes] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const maxDescriptionLength = 100; // Maksimal karakter deskripsi sebelum dipotong

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-screen overflow-y-auto scrollbar-custom"
      >
        {/* Header */}
        <div className="flex items-center p-4 border-b">
          <img
            src={userImage || profileImage}
            alt={username}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-bold text-sm">EXPOSE{username}</p>
            <p className="text-xs text-gray-500">1-1-1-{date}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="ml-auto text-gray-500 hover:text-gray-800"
          >
            ✖
          </motion.button>
        </div>

        {/* Image Section */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer */}
        <div className="p-4">
          <div className="flex items-center space-x-4 mb-4">
            <motion.button
              onClick={() => setLikes((prev) => prev + 1)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`text-2xl ${likes > 0 ? "text-red-500" : "text-gray-500"}`}
            >
              ❤️
            </motion.button>
            <motion.button
              onClick={handleCommentToggle}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-500"
            >
              💬
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-500"
            >
              🔗
            </motion.button>
          </div>
          <p className="text-sm font-bold mb-1">{likes} Likes</p>
          <p className="text-sm">
            <span className="font-bold">{username}:</span> {title}
          </p>

          {/* Description */}
          <div className="mt-2">
            <p
              className={`text-sm text-gray-700 ${
                showFullDescription
                  ? "whitespace-normal break-words"
                  : "whitespace-normal break-words overflow-hidden text-ellipsis"
              }`}
              style={{
                display: showFullDescription ? "block" : "-webkit-box",
                WebkitLineClamp: showFullDescription ? "unset" : 3, // Jumlah baris deskripsi jika dipotong
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </p>
            {description.length > maxDescriptionLength && (
              <button
                onClick={toggleDescription}
                className="text-blue-500 text-sm mt-1"
              >
                {showFullDescription ? "Show less" : "More"}
              </button>
            )}
          </div>
          {isMobile && isCommentVisible && (
  <CommentHP isOpen={isCommentVisible} onClose={() => setIsCommentVisible(false)} />
)}

{!isMobile && isCommentVisible && (
  <CommentPC isOpen={isCommentVisible} onClose={() => setIsCommentVisible(false)} />
)}

        </div>
      </motion.div>
    </div>
  );
};

export default PostModal;
