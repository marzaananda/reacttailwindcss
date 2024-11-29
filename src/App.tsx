import React from 'react';
import './style.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TypingEffect from './TypingEffect';
import ImageSlider from './components/ImageSlider';
import CardList from "./pages/CardList";
import '@fontsource/quantico'; // Default
import '@fontsource/quantico/400.css'; // Regular
import '@fontsource/quantico/700.css'; // Bold
import Page from './components/PageHome';



// import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div>
    <Navbar />
    <Home />
    <CardList />
    <Page />
    </div>
  );
};

export default App;