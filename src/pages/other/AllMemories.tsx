import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface Article {
  id: number;
  title: string;
  imageUrl: string[];
  summary: string;
}

const AllMemories: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [likes, setLikes] = useState<number[]>([]);

  useEffect(() => {
    const fetchedArticles = [
      {
        id: 1,
        title: "Photobook IPA 1",
        imageUrl: ["/img/IMG_1.jpg", "/img/IMG_2.jpg", "/img/IMG_3.jpg"],
        summary:
          "banyak kisah yang terjadi dan akhirnya menjadi kenangan tak terlupakan. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 2,
        title: "Prakik kimia XI IPA 1",
        imageUrl: ["/img/IMG_4.jpg", "/img/IMG_5.jpg"],
        summary: "Pelajaran kalor mungkin...jika kalian tahu beritahu saya ok.",
      },
      {
        id: 3,
        title: "Hari batik sebelum berangkat study tour",
        imageUrl: ["/img/IMG_6.jpg"],
        summary: "Aku tidak tahu bagaimana menjelaskannya, tetapi banyak hal terjadi di hari itu.",
      },
    ];
    setArticles(fetchedArticles);

    // Set initial likes to 0 for all articles
    setLikes(fetchedArticles.map(() => 0));
  }, []);

  const handleLike = (index: number) => {
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  const handleShare = () => {
    alert("Fitur Share belum tersedia.");
  };

  const handleComment = () => {
    alert("Fitur Comment belum tersedia.");
  };

  return (
    <div className="bg-gray-300 text-white">
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url(/img/hero-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center text-left h-full px-4">
          <h1 className="font-quantico text-4xl md:text-6xl font-bold mb-4">
            Berita Terbaru
          </h1>
          <p className="font-quantico text-lg md:text-xl max-w-3xl">
            Temukan informasi dan kabar terbaru yang menarik untukmu.
          </p>
        </div>
      </section>

      {/* Card List */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="font-quantico text-2xl md:text-3xl font-bold mb-8">
          Berita Populer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="bg-gray-400 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => setSelectedArticleIndex(index)}
            >
              <img
                src={article.imageUrl[0]}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-quantico text-lg font-bold mb-2">
                  {article.title}
                </h3>
                <p className="font-quantico text-sm text-white line-clamp-3">
                  {article.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedArticleIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg p-6 shadow-xl w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => {
                setSelectedArticleIndex(null);
                setIsExpanded(false);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            {/* Swiper */}
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="w-full h-[400px] mb-4"
            >
              {articles[selectedArticleIndex].imageUrl.map((image, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center">
                  <img
                    src={image}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-[300px] md:h-[400px] object-contain rounded-md p-4"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Konten */}
            <h2 className="font-quantico text-xl font-bold mb-2">
              {articles[selectedArticleIndex].title}
            </h2>
            <p className="font-quantico text-gray-500 text-sm mb-4 overflow-hidden">
              {isExpanded
                ? articles[selectedArticleIndex].summary
                : `${articles[selectedArticleIndex].summary.slice(0, 150)}...`}
            </p>
            {articles[selectedArticleIndex].summary.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-500 hover:underline text-sm"
              >
                {isExpanded ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
              </button>
            )}

            {/* Tombol Interaksi */}
            <div className="flex justify-around mt-4">
              <button
                onClick={() => handleLike(selectedArticleIndex)}
                className="font-quantico flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
              >
                ❤ {likes[selectedArticleIndex]} Like
              </button>
              <button
                onClick={handleComment}
                className="font-quantico text-gray-600 hover:text-blue-600 transition"
              >
                💬 Comment
              </button>
              <button
                onClick={handleShare}
                className="font-quantico text-gray-600 hover:text-green-600 transition"
              >
                ↗ Share
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AllMemories;
