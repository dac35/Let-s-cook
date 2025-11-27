// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsnw53RMdq7aXz_XBIZOXHp7QcMENrk5Q",
  authDomain: "let-s-cook-22f58.firebaseapp.com",
  projectId: "let-s-cook-22f58",
  storageBucket: "let-s-cook-22f58.firebasestorage.app",
  messagingSenderId: "690337970384",
  appId: "1:690337970384:web:b25270e767280032a2c6d5",
  measurementId: "G-5D8DB8SST5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
