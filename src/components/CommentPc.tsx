import React from "react";

interface CommentPCProps {
  isOpen: boolean; // Untuk menentukan apakah komentar terbuka
  onClose: () => void; // Fungsi untuk menutup komentar
}

const CommentPC: React.FC<CommentPCProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 z-50 bg-white w-1/3 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 shadow-lg`}
    >
      {/* Tombol Close */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
        onClick={onClose}
      >
        ✖
      </button>

      {/* Header Komentar */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">Komentar</h2>
      </div>

      {/* List Komentar */}
      <div className="p-4 overflow-y-auto h-full">
        {/* Mockup data komentar */}
        {Array(10)
          .fill(null)
          .map((_, idx) => (
            <div key={idx} className="flex items-start gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-sm">Pengguna {idx + 1}</p>
                <p className="text-sm text-gray-600">
                  Ini adalah komentar contoh ke-{idx + 1}.
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentPC;
