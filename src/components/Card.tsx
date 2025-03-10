import React from "react";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  summary: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ id, title, imageUrl, summary, onClick }) => {
  return (
    <div
      className="bg-white overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-quantico text-lg font-bold mb-2 text-gray-800">{title}</h3>
        <p className="font-quantico text-sm line-clamp-3 text-gray-600">{summary}</p>
      </div>
    </div>
  );
};

export default Card;
