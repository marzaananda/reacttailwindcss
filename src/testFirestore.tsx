import { useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const TestFirestore = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testCollection"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
      } catch (error) {
        console.error("Error fetching Firestore data: ", error);
      }
    };
    fetchData();
  }, []);

  return <div>Check the console for Firestore data.</div>;
};

export default TestFirestore;
