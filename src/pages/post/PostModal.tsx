import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PostModalProps {
  images: string[];
  title: string;
  description: string;
  date: string;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ images, title, description, date, onClose }) => {
  const [likes, setLikes] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleLike = () => setLikes((prev) => prev + 1);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  // Prevent page scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-xl w-[90%] max-w-4xl max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-50"
        >
          ✖
        </button>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full mb-4"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full max-h-[300px] md:max-h-[400px] object-contain rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Post Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="font-quantico text-xl font-bold mb-2">{title}</h2>
          <p className="font-quantico text-gray-500 text-xs mb-4">{date}</p>

          {/* Description with "Show more" */}
          <div className="text-sm text-gray-600 mb-4 break-words">
            {showFullDescription ? (
              <p>{description}</p>
            ) : (
              <p>{`${description.slice(0, 100)}...`}</p>
            )}
            {description.length > 100 && (
              <button
                onClick={toggleDescription}
                className="text-blue-500 ml-2 hover:underline mt-2 block"
              >
                {showFullDescription ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        </div>

        {/* Interaction Buttons */}
        <div className="sticky bottom-0 bg-white p-4 shadow-md">
          <div className="flex justify-around">
            {/* Like Button */}
            <button
              onClick={handleLike}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill={likes > 0 ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span>{likes} Like{likes === 1 ? "" : "s"}</span>
            </button>

            {/* Comment Button */}
            <button
              onClick={() => alert("Comment feature coming soon!")}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h8M8 14h4m-6 4h14m-14-8h14"
                />
              </svg>
              <span>Comment</span>
            </button>

            {/* Share Button */}
            <button
              onClick={() => alert("Share feature coming soon!")}
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 10l5-5m0 0l-5-5m5 5H5m6 5l-5 5m0 0l5 5m-5-5h16"
                />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PostModal;
