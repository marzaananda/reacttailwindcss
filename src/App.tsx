import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CardList from './pages/CardList';
import Page from './pages/PageHome';
import Footer from './pages/Footer';
import ImageSlider from './pages/ImageSlider';
import AllMemories from './pages/other/AllMemories';
import MainContent from './pages/MainContent';

// Import halaman detail memori
import Kimia from './pages/MemoryDetail/Kimia';
import StudyTour from './pages/MemoryDetail/StudyTour';
import ManasikHaji from './pages/MemoryDetail/ManasikHaji';

const App: React.FC = () => {
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

          {/* Halaman detail untuk memori */}
          <Route path="/memory/kimia" element={<Kimia />} />
          <Route path="/memory/study-tour" element={<StudyTour />} />
          <Route path="/memory/manasik-haji" element={<ManasikHaji />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
