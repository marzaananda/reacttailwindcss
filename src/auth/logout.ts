import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const handleLogout = async () => {
  if (auth.currentUser) {
    const adminRef = doc(db, "admins", "admin");

    try {
      await updateDoc(adminRef, { isLoggedIn: false }); // Reset status admin
      await signOut(auth); // Logout dari Firebase Auth
      setIsAdmin(false); // Update state React agar tombol berubah kembali
      console.log("Admin logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
};

function setIsAdmin(arg0: boolean) {
  throw new Error("Function not implemented.");
}

