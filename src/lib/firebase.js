// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBED7Sz9I9k-C0JOQGBtqzL-YhumftRDW4",
  authDomain: "cocina-3cfa6.firebaseapp.com",
  projectId: "cocina-3cfa6",
  storageBucket: "cocina-3cfa6.firebasestorage.app",
  messagingSenderId: "210528107330",
  appId: "1:210528107330:web:94be14af8c15777a7ee6db",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
