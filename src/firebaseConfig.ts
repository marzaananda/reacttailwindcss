// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqLUNzKkYUUPPZkSwZZAmTTMjhIpuG7fs",
  authDomain: "memo-1-a36e1.firebaseapp.com",
  projectId: "memo-1-a36e1",
  storageBucket: "memo-1-a36e1.firebasestorage.app",
  messagingSenderId: "909851579616",
  appId: "1:909851579616:web:9acd451cb21344f3c56c85",
  measurementId: "G-9XSL8SKXGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };