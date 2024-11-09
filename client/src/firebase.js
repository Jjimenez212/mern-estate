import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-63e0c.firebaseapp.com",
  projectId: "mern-estate-63e0c",
  storageBucket: "mern-estate-63e0c.firebasestorage.app",
  messagingSenderId: "422421204923",
  appId: "1:422421204923:web:214475d77faa78e047fe9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);