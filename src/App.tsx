import React from 'react';
import './style.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TypingEffect from './TypingEffect';
import ImageSlider from './components/ImageSlider';
import CardList from "./pages/CardList";


// import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div>
    <Navbar />
    <Home />
    <CardList />

    </div>
  );
};

export default App;