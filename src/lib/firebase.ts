import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEfQK3dZ7oxd2jUL2PKBcP2GArUwFLGEY",
  authDomain: "aitek-app-development.firebaseapp.com",
  databaseURL: "https://aitek-app-development-default-rtdb.firebaseio.com",
  projectId: "aitek-app-development",
  storageBucket: "aitek-app-development.appspot.com",
  messagingSenderId: "539403796561",
  appId: "1:539403796561:web:249bf8e175b233edf07870",
  measurementId: "G-8Y662N5DWB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);