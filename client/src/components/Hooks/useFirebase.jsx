// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3I8iW0iP67HeGWbZlhTpOiEwjxQUQbHY",
  authDomain: "car-doctor-3efcb.firebaseapp.com",
  projectId: "car-doctor-3efcb",
  storageBucket: "car-doctor-3efcb.appspot.com",
  messagingSenderId: "680505130738",
  appId: "1:680505130738:web:110e4245f221726bddda6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
