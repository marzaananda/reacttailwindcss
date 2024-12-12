import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CardList from './pages/CardList';
import Page from './pages/PageHome';
import Footer from './pages/Footer';
import ImageSlider from './pages/ImageSlider';
import AllMemories from './pages/other/AllMemories'; 
import '@fontsource/quantico'; 
import '@fontsource/quantico/400.css'; 
import '@fontsource/quantico/700.css'; 
import MainContent from './pages/MainContent';

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
        </Routes>

        {/* Footer*/}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
