import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3q8irwEuN-TaTKacm_sJaZp7AB2eh5AE",
  authDomain: "atlas-cruzer-app.firebaseapp.com",
  projectId: "atlas-cruzer-app",
  storageBucket: "atlas-cruzer-app.appspot.com",
  messagingSenderId: "676418826316",
  appId: "1:676418826316:web:372f38ae6e2ff668f604e9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);