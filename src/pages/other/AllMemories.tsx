import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Tipe untuk data artikel (berita)
interface Article {
  id: number;
  title: string;
  imageUrl: string;
  summary: string;
  link: string;
}

const AllMemories: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  // Mengambil data artikel, bisa diganti dengan API atau database
  useEffect(() => {
    const fetchArticles = async () => {
      // Data dummy untuk sekarang, ganti dengan data nyata
      const fetchedArticles = [
        {
          id: 1,
          title: 'Photobook IPA 1',
          imageUrl: '/img/IMG_1.jpg', // Path ke gambar di folder public
          summary: 'banyak kisah yang terjadi dan akhirnya menjadi kenangan tak terlupakan ',
          link: '/memory/1',
        },
        {
          id: 2,
          title: 'Prakik kimia XI IPA 1',
          imageUrl: '/img/IMG_2.jpg',
          summary: 'Pelajaran kalor mungkin...jika kalian tahu beritahu saya ok',
          link: '/memory/2',
        },
        {
          id: 3,
          title: 'Hari batik sebelum berangkat study tour',
          imageUrl: '/img/IMG_3.jpg',
          summary: 'aku tidak tahu bagaimana menjelaskan nya akan tetapi banyak hal yang terjadi di hari itu karena mereka menyiapkan diri untuk study tour  ',
          link: '/memory/3',
        },
        {
          id: 4,
          title: 'Study Tour IPA 1 2022',
          imageUrl: '/img/IMG_4.jpg',
          summary: 'Study tour yang sangat menyenangkan dan membuat kalian kangen bukan???',
          link: '/memory/4',
        },
        {
          id: 5,
          title: 'IPA 1 BERADA DI CANDI PRAMBANAN COYYYY',
          imageUrl: '/img/IMG_5.jpg',
          summary: 'pokonya ngangenin dah wkwkwk:)',
          link: '/memory/5',
        },
        {
          id: 6,
          title: 'Praktik manasik haji IPA 1 yang terakhir',
          imageUrl: '/img/IMG_6.jpg',
          summary: 'insyallah anak-anak IPA 1 naik haji semua,aamiinn',
          link: '/memory/6',
        },
      ];
      
      setArticles(fetchedArticles);
    };
    fetchArticles();
  }, []);

  return (
    <div className="bg-gray-300 text-white">
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/hero-image.jpg)' }} // Perbaiki path gambar
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center text-left h-full px-4">
          <h1 className="font-quantico text-4xl text- md:text-6xl font-bold mb-4">
            Berita Terbaru
          </h1>
          <p className="font-quantico text-lg md:text-xl max-w-3xl">
            Temukan informasi dan kabar terbaru yang menarik untukmu.
          </p>
        </div>
      </section>

      {/* Card List Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-quantico text-2xl md:text-3xl font-bold mb-8">
            Berita Populer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mapkan data artikel ke dalam card */}
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-400 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-quantico text-lg font-bold mb-2">
                  {article.title}
                </h3>
                <p className="font-quantico text-sm text-white">
                  {article.summary}
                </p>
                <Link
                  to={article.link}
                  className="font-quantico text-red-400 font-semibold hover:underline mt-2 inline-block"
                >
                  Baca selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllMemories;
