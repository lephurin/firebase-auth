import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4qhrFevoGte3XezNRy5GcipKf_xBLccM",
  authDomain: "fir-auth-ab97e.firebaseapp.com",
  projectId: "fir-auth-ab97e",
  storageBucket: "fir-auth-ab97e.firebasestorage.app",
  messagingSenderId: "440708524758",
  appId: "1:440708524758:web:13ccba2bc2441512aa3777",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);