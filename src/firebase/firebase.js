import { initializeApp } from 'firebase/app';
import { getAuth , signInWithPopup , GoogleAuthProvider} from "firebase/auth";

const config = {
    apiKey: "AIzaSyArlJO4wkwzuNr5B3iPWmBo9OdfmgC6q1c",
    authDomain: "shopping-site-eb29f.firebaseapp.com",
    projectId: "shopping-site-eb29f",
    storageBucket: "shopping-site-eb29f.appspot.com",
    messagingSenderId: "85485408828",
    appId: "1:85485408828:web:1842282cf4a307082fa939",
    measurementId: "G-FCF131JC51"
  };

  const app = initializeApp(config);

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameter({ prompt: 'select_account' });

  export const signInWithGoogle = () => signInWithPopup(auth,provider);
  
  
  