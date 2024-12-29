import React from "react";

interface CardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  description: string;
  onClick?: () => void; // Tambahkan onClick sebagai properti opsional
}

const Card: React.FC<CardProps> = ({ image, title, category, date, description, onClick }) => {
  return (
    <div
      onClick={onClick} // Tambahkan event onClick di sini
      className="relative w-full md:w-[300px] bg-white shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-[180px] w-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <span className="font-quantico text-red-500 text-xs font-semibold uppercase">
          {category}
        </span>
        <span className="font-quantico text-gray-500 text-xs ml-2">{date}</span>
        <h3 className="font-quantico text-gray-800 font-bold text-md mt-2">{title}</h3>
        <p className="font-quantico text-gray-600 text-sm mt-2 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
