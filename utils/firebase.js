// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH6OH7lp-exLT7CmaI-fZwLrKXYW7iaoI",
  authDomain: "idfk-484a7.firebaseapp.com",
  projectId: "idfk-484a7",
  storageBucket: "idfk-484a7.appspot.com",
  messagingSenderId: "990798263761",
  appId: "1:990798263761:web:2d7e2508baf5f5932cdcf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();