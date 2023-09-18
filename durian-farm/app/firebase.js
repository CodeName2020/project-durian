// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4TwbxgTuC4oIsj46Up_e-lS9eBXmMknM",
  authDomain: "try-auth-abc.firebaseapp.com",
  projectId: "try-auth-abc",
  storageBucket: "try-auth-abc.appspot.com",
  messagingSenderId: "808770965631",
  appId: "1:808770965631:web:dc9e8cfbcc3fcf3ab46f4a",
  measurementId: "G-SFWMK3WR0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

