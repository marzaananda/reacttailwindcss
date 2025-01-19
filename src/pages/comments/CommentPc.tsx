import React, { useState } from "react";

interface CommentPCProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommentPC: React.FC<CommentPCProps> = ({ isOpen, onClose }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      console.log("Komentar dikirim:", newComment);
      setNewComment("");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 z-50 bg-white w-full md:w-1/3 shadow-lg transition-transform transform ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      } duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold">Komentar</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black text-lg"
        >
          ✖
        </button>
      </div>

      {/* Daftar Komentar */}
      <div className="p-4 overflow-y-auto flex-grow">
        {Array(7)
          .fill(null)
          .map((_, idx) => (
            <div key={idx} className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-black">Pengguna {idx + 1}</p>
                <p className="text-sm text-gray-600">
                  Komentar contoh ke-{idx + 1}.
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Input Komentar */}
      <div className="p-4 border-t">
        <form onSubmit={handleCommentSubmit} className="flex gap-2">
          <input
            type="text"
            className="text-black flex-grow px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tulis komentar..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentPC;
