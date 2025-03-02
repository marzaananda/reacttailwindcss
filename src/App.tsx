import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CardList from './pages/CardList';
import Page from './pages/PageHome';
import Footer from './pages/Footer';
import ImageSlider from './pages/ImageSlider';
import AllMemories from './pages/other/AllMemories';
import MainContent from './pages/MainContent';
import FloatingButton from "./components/FloatingButton"; // Pastikan path sesuai
import AddPostPage from './components/addPostPage/AddPostPage';
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";



// Import halaman detail memori


const App: React.FC = () => {
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "OneData"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
      console.log("Data dari Firestore:", data); // Cek apakah data tidak kosong
      setArticles(data); // Pastikan ini hanya dipanggil jika data valid
    } catch (error) {
      console.error("🔥 Error mengambil data:", error);
    }
  };
  

  return (
    <Router>
      <div>
        {/* Navbar tetap tampil di semua halaman */}
        <Navbar />

        {/* Routes untuk setiap komponen */}
        <Routes>
          {/* Halaman utama */}
          <Route
            path="/"
            element={
              <>
                <MainContent />
                <CardList />
                <Page />
                <Home />
              </>
            }
          />
          <Route path="/all-memories" element={<AllMemories />} />
          <Route path="/add-post" element={<AddPostPage />} />

          {/* Halaman detail untuk memori */}
          {/* <Route path="/memory/kimia" element={<Kimia />} />
          <Route path="/memory/study-tour" element={<StudyTour />} />
          <Route path="/memory/manasik-haji" element={<ManasikHaji />} /> */}
        </Routes>

        {/* Floating button */}
        <FloatingButton />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
function setArticles(data: { id: string; }[]) {
  throw new Error("Function not implemented.");
}

