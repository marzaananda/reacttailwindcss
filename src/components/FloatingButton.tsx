import React from "react";
import { useNavigate } from "react-router-dom";
import { handleAdminAction } from "../utils/adminCheck";

const FloatingButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    handleAdminAction(() => navigate("/add-post"));
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 text-metal rounded-full hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      <span className="text-4xl font-bold">+</span>
    </button>
  );
};

export default FloatingButton;
