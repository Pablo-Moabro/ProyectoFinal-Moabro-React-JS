
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDFc2VSNshwB-cqhHmhuJxlR0qh31Qs-8s",
  authDomain: "gpu-store-proyectofinal-ch.firebaseapp.com",
  projectId: "gpu-store-proyectofinal-ch",
  storageBucket: "gpu-store-proyectofinal-ch.appspot.com",
  messagingSenderId: "709448517103",
  appId: "1:709448517103:web:e3051dd113639d90aca21a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)