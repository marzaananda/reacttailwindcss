import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";

interface PostModalProps {
  onClose: () => void;
  images: string[];
  title: string;
  description: string;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, images, title, description }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-xl overflow-auto">
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        {/* Slider Gambar */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="h-[300px] w-full rounded-md overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Judul dan Deskripsi */}
        <h2 className="mt-4 text-2xl font-bold break-words">{title}</h2>
        <p className="text-gray-700 mt-2 break-words">{description}</p>
      </div>
    </div>
  );
};

export default PostModal;
