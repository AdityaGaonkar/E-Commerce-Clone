// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcU4eGQkZGxSMhSOdbk73_5lJoRl4nqDc",
  authDomain: "clone-react-9f1e9.firebaseapp.com",
  projectId: "clone-react-9f1e9",
  storageBucket: "clone-react-9f1e9.appspot.com",
  messagingSenderId: "365450325675",
  appId: "1:365450325675:web:1dcf5929063b0cbb4791ee",
  measurementId: "G-3XGH57RLXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

// Export the Firebase auth, Firestore database, and Google Auth Provider
export { db, auth, googleAuthProvider };
