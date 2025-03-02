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
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAdminStatus = async (user: any) => {
      if (user) {
        const adminRef = doc(db, "admins", "admin");
        const adminSnap = await getDoc(adminRef);

        if (adminSnap.exists() && adminSnap.data().isLoggedIn) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, checkAdminStatus);
    return () => unsubscribe();
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
