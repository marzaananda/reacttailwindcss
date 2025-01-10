import React from "react";
import { motion } from "framer-motion";

interface CommentHPProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommentHP: React.FC<CommentHPProps> = ({ isOpen, onClose }) => {
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
          onClose(); // Tutup jika di-swipe ke bawah
        }
      }}
      className="fixed inset-0 z-50 bg-gray-100 rounded-t-lg shadow-lg overflow-hidden"
    >
      {/* Header Komentar */}
      <div className="bg-gray-300 py-4 px-6 flex justify-center items-center">
        <div className="w-12 h-1 bg-gray-500 rounded-full"></div>
      </div>

      {/* Daftar Komentar */}
      <div className="p-4 overflow-y-auto max-h-[80vh]">
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
    </motion.div>
  );
};

export default CommentHP;
