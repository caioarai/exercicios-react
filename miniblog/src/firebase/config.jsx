import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLmjH-dkbHp2AaiMS7QlPiu0zCCbChI7k",
  authDomain: "miniblog-39725.firebaseapp.com",
  projectId: "miniblog-39725",
  storageBucket: "miniblog-39725.appspot.com",
  messagingSenderId: "75196340561",
  appId: "1:75196340561:web:d3e8e5d2e10ea317a4db70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
