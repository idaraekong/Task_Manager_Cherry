// Import the functions you need from firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALBwYqUns9cS8epkNux2z78_tNwGRLzUE",
  authDomain: "todo-e111e.firebaseapp.com",
  projectId: "todo-e111e",
  storageBucket: "todo-e111e.appspot.com",
  messagingSenderId: "887198726844",
  appId: "1:887198726844:web:0bb9fa5b2602aaf1f82eb9",
  measurementId: "G-2R0RZGL1RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);