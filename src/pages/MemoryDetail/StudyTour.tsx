import React from "react";
import topImage from "/img/IMG_6.jpg";
import bottomImage from "/img/IMG_6.jpg";

const MemoryArticle: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      {/* Bagian Gambar Atas */}
      <div className="relative w-full max-w-4xl h-full bg-gray-300 flex items-center justify-center">
        <img src={topImage} alt="Gambar Atas" className="w-full h-full object-cover" />
      </div>

      {/* Bagian Artikel */}
      <div className="w-full max-w-4xl bg-white shadow-md p-6 my-10">
        <h1 className="text-2xl font-bold mb-4">Judul Artikel</h1>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut elit vehicula, commodo sapien nec, ultrices risus.
        </p>

        {/* Garis pembatas */}
        <hr className="my-6 border-gray-300" />

        <p className="text-gray-700 leading-relaxed">
          Quisque ac tellus in erat lacinia cursus. Maecenas nec urna vitae purus tempor interdum. Cras et sapien non erat congue blandit.
        </p>
      </div>

      {/* Bagian Gambar Bawah */}
      <div className="relative w-full max-w-4xl h-full bg-gray-300 flex items-center justify-center">
        <img src={bottomImage} alt="Gambar Bawah" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default MemoryArticle;
