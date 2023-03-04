import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setDoc, getDoc, doc, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const firebaseConfig = {
  apiKey: "AIzaSyDA0H_FN7V_z2Yh8vA2nLT8tT4jOTt_LJk",
  authDomain: "shopzyy-4fa3b.firebaseapp.com",
  projectId: "shopzyy-4fa3b",
  storageBucket: "shopzyy-4fa3b.appspot.com",
  messagingSenderId: "769649097938",
  appId: "1:769649097938:web:b4cdad738721c5ef21c10b",
  measurementId: "G-ZG46PF59YX",
};

export const createUserProfileDoc = async (userAuth) => {
  if (userAuth == null) return;

  const docRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(db, "users", userAuth.uid), {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  Swal.fire({ text: "Successfully Signed In." });

  return docRef;
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
