import { auth, db } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export const logoutAdmin = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      // Update status login di Firestore (opsional)
      const userDoc = doc(db, "admins", user.uid);
      await updateDoc(userDoc, { isLoggedIn: false });

      // Logout dari Firebase Auth
      await auth.signOut();
      console.log("Admin berhasil logout");
    }
  } catch (error) {
    console.error("Error saat logout:", error);
  }
};
