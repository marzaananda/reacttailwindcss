import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CardList from './pages/CardList';
import Page from './pages/PageHome';
import Footer from './pages/Footer';
import ImageSlider from './pages/ImageSlider';
import AllMemories from './pages/other/AllMemories';
import MainContent from './pages/MainContent';
import FloatingButton from "./components/FloatingButton";
import AddPostPage from './components/addPostPage/AddPostPage';
import { db, auth } from "./firebaseConfig";
import { collection, getDocs, doc, getDoc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User logged in:", user.email);
        
        // Ambil token untuk cek custom claims
        const token = await user.getIdTokenResult();
        console.log("Custom claims:", token.claims);
  
        if (token.claims.admin) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
  
    // Real-time listener untuk status admin di Firestore
    const adminRef = doc(db, "admins", "admin");
    const unsubscribeFirestore = onSnapshot(adminRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data().isLoggedIn === false) {
        setIsAdmin(false);
      }
    });
  
    return () => {
      unsubscribeAuth();
      unsubscribeFirestore();
    };
  }, []);
  
  
  
  

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><MainContent /><CardList /><Page /><Home /></>} />
          <Route path="/all-memories" element={<AllMemories />} />
          <Route path="/add-post" element={isAdmin ? <AddPostPage /> : <Navigate to="/" />} />
        </Routes>
        <FloatingButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
