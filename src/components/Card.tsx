import React from "react";

interface CardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, category, date, description }) => {
  return (
    <div className="relative w-full md:w-[300px] bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
      {/* Image Section */}
      <div className="relative h-[180px] w-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <span className="text-red-500 text-xs font-semibold uppercase">{category}</span>
        <span className="text-gray-500 text-xs ml-2">{date}</span>
        <h3 className="text-gray-800 font-bold text-md mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
