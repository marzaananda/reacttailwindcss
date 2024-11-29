import React, { useEffect, useState } from "react"; // Tambahkan useState dan useEffect
import { motion } from "framer-motion";

const PageHome: React.FC = () => {
  // State untuk mengontrol apakah elemen sudah di-scroll ke dalam tampilan
  const [inView, setInView] = useState(false);

  // Menambahkan event listener saat halaman di-scroll
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight; // Posisi scroll
      const pageHeight = document.getElementById("page-home")?.offsetTop! + document.getElementById("page-home")?.offsetHeight!;

      if (position >= pageHeight) {
        setInView(true); // Jika sudah mencapai posisi elemen
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  // Variants untuk animasi staggered
  const staggeredVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { staggerChildren: 0.2, duration: 1 } }
  };

  return (
    <motion.section
      id="page-home"
      className="relative w-full h-[485px] bg-cover"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: "url('./public/_MG_4692 1.png')", // Ganti dengan URL gambar Anda
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Pastikan gambar memenuhi container
        
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <motion.div
        className="relative z-10 text-left text-white px-6 md:px-12 flex flex-col justify-center h-full"
        initial="initial"
        animate={inView ? "animate" : "initial"} // Menambahkan animasi saat di-scroll
        variants={staggeredVariants}
      >
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          KAMI IPA 1
        </motion.h1>
        
        <motion.p
          className="text-lg mt-4 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Suasana kelas yang dulu penuh canda tawa kini terasa hening; meja-meja yang
          pernah menjadi saksi cerita, tumpukan tugas, dan diskusi hangat kini
          teringat kosong, menyisakan bayangan kenangan indah saat kebersamaan menjadi
          bagian dari rutinitas yang takkan terulang lagi.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default PageHome;
