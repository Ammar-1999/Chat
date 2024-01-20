import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkQlDGVxXxrSapXg5a3bgBlkGOUWQf-2o",
  authDomain: "xxxx-a6c5b.firebaseapp.com",
  projectId: "xxxx-a6c5b",
  storageBucket: "xxxx-a6c5b.appspot.com",
  messagingSenderId: "613263200575",
  appId: "1:613263200575:web:9b109dbe86db6ac0d4838a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
