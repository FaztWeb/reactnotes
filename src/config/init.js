// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqONMb27lsY2Jlnz8v_Q7LvFZ4TU2jDu8",
  authDomain: "fir-app-ea974.firebaseapp.com",
  projectId: "fir-app-ea974",
  storageBucket: "fir-app-ea974.appspot.com",
  messagingSenderId: "798169977201",
  appId: "1:798169977201:web:c12541e727e6bd7119a6d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
