// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-985fa.firebaseapp.com",
  projectId: "mern-auth-985fa",
  storageBucket: "mern-auth-985fa.appspot.com",
  messagingSenderId: "981164259991",
  appId: "1:981164259991:web:bc8540c63d69e009f2c7d2"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// const firebaseConfig = {
//   apiKey: "AIzaSyC8b-L5vPsIK9yrDDTOs3n00IvnsfCC-cM",
//   authDomain: "auth-app-42c49.firebaseapp.com",
//   projectId: "auth-app-42c49",
//   storageBucket: "auth-app-42c49.appspot.com",
//   messagingSenderId: "730398375134",
//   appId: "1:730398375134:web:196e3629927148854a164f",
//   measurementId: "G-GRWPCMPZ7V"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
