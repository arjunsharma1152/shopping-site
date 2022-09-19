import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArlJO4wkwzuNr5B3iPWmBo9OdfmgC6q1c",
  authDomain: "shopping-site-eb29f.firebaseapp.com",
  projectId: "shopping-site-eb29f",
  storageBucket: "shopping-site-eb29f.appspot.com",
  messagingSenderId: "85485408828",
  appId: "1:85485408828:web:1842282cf4a307082fa939",
  measurementId: "G-FCF131JC51",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
