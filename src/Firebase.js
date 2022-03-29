import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBuq0cLIAxHscBAl0J8HS-8jl6WnVNd8oY",
  authDomain: "authentication-9a777.firebaseapp.com",
  projectId: "authentication-9a777",
  storageBucket: "authentication-9a777.appspot.com",
  messagingSenderId: "982945770186",
  appId: "1:982945770186:web:d1772b3c90119914bfa233",
  measurementId: "G-9YRLKG4DM7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
