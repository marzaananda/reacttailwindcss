import React, { useState } from "react";
import { motion } from "framer-motion";

interface CommentHPProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommentHP: React.FC<CommentHPProps> = ({ isOpen, onClose }) => {
  const [newComment, setNewComment] = useState(""); // State untuk komentar baru

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      // Proses pengiriman komentar
      console.log("Komentar dikirim:", newComment);
      setNewComment(""); // Reset input setelah dikirim
    }
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: isOpen ? "0%" : "100%" }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.y > 100) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 bg-gray-100 rounded-t-lg shadow-lg overflow-hidden"
    >
      {/* Header Komentar */}
      <div className="bg-gray-300 py-4 px-6 flex justify-center items-center">
        <div className="w-12 h-1 bg-gray-500 rounded-full"></div>
      </div>

      {/* Daftar Komentar */}
      <div className="p-4 overflow-y-auto max-h-[70vh]">
        <ul>
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index} className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">User {index + 1}</p>
                <p className="text-gray-600 text-sm">
                  Ini adalah komentar contoh untuk komentar nomor {index + 1}.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Input Komentar */}
      <div className="p-4 border-t">
        <form onSubmit={handleCommentSubmit} className="flex items-center gap-2">
          <input
            type="text"
            className="flex-grow border rounded-full px-4 py-2 text-sm"
            placeholder="Tulis komentar..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Kirim
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default CommentHP;
