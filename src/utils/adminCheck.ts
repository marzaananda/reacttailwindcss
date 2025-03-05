import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export const checkAdmin = (): Promise<boolean> => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        const isAdmin = idTokenResult.claims.admin === true;
        resolve(isAdmin);
      } else {
        resolve(false);
      }
    });
  });
};

export const handleAdminAction = (callback: () => void) => {
  checkAdmin().then((isAdmin) => {
    if (isAdmin) {
      callback();
    } else {
      alert("Hanya admin yang bisa akses ini");
    }
  });
};
