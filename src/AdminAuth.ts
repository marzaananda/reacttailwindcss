import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

// Fungsi Login Admin
export const loginAdmin = async (email, password) => {
  try {
    // Cek status login di Firestore
    const adminRef = doc(db, "admins", "admin");
    const adminSnap = await getDoc(adminRef);
    if (adminSnap.exists() && adminSnap.data().isLoggedIn) {
      throw new Error("Admin sedang aktif di perangkat lain.");
    }

    // Login ke Firebase Authentication
    await signInWithEmailAndPassword(auth, email, password);

    // Update status di Firestore
    await updateDoc(adminRef, {
      isLoggedIn: true,
      lastActive: serverTimestamp(),
    });

    return { success: true, message: "Login berhasil!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Fungsi Logout Admin
export const logoutAdmin = async () => {
  try {
    await signOut(auth);

    // Update status di Firestore
    const adminRef = doc(db, "admins", "admin");
    await updateDoc(adminRef, {
      isLoggedIn: false,
      lastActive: serverTimestamp(),
    });

    return { success: true, message: "Logout berhasil!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
