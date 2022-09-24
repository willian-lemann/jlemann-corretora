import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBncpegilYtJFgvtUrqV5zdHL8kfWkptbY",
  authDomain: "jlemann-corretora.firebaseapp.com",
  projectId: "jlemann-corretora",
  storageBucket: "jlemann-corretora.appspot.com",
  messagingSenderId: "291614803698",
  appId: "1:291614803698:web:d20886c65727bdc300326b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
