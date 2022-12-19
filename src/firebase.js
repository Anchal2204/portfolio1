// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4tBjzSVbvEo_22ZoTz-MvRqgP2dvcrCU",
  authDomain: "anchal-portfolio-3d797.firebaseapp.com",
  projectId: "anchal-portfolio-3d797",
  storageBucket: "anchal-portfolio-3d797.appspot.com",
  messagingSenderId: "159356642840",
  appId: "1:159356642840:web:73e28ce30cca6a3f8ec56d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()