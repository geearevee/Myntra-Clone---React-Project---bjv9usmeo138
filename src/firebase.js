// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg-H1uFt_jRcaTBYNdX4PY7Ph_CCmEy4Y",
  authDomain: "myntra-d4ab2-2a857.firebaseapp.com",
  projectId: "myntra-d4ab2",
  storageBucket: "myntra-d4ab2.appspot.com",
  messagingSenderId: "486247725725",
  appId: "1:486247725725:web:4a03c72cf587086b5db274",
  measurementId: "G-WYKZ1G4XRS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);