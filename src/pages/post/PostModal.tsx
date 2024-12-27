import React, { useState } from "react";
import { motion } from "framer-motion";

interface PostModalProps {
  card: any;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ card, onClose }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes((prev) => prev + 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg p-6 shadow-xl w-[90%] max-w-xl"
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>

          {/* Image Section */}
          <img src={card.image} alt={card.title} className="w-full rounded-md mb-4" />

          {/* Post Content */}
          <h2 className="font-quantico text-xl font-bold mb-2">{card.title}</h2>
          <p className="font-quantico text-sm text-gray-600 mb-4">{card.description}</p>
          <span className="font-quantico text-gray-500 text-xs">{card.date}</span>

          {/* Interaction Buttons */}
          <div className="mt-4 flex justify-around">
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
