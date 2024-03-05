// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeiGHaa-MH-Z_UjdWQOCrg7K5StdIo_QM",
  authDomain: "linkedin-clone-4df09.firebaseapp.com",
  projectId: "linkedin-clone-4df09",
  storageBucket: "linkedin-clone-4df09.appspot.com",
  messagingSenderId: "593263498408",
  appId: "1:593263498408:web:c293b44f57777d48029e9d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, db, provider, storage };

//  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY || "mock_key",
//   authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKETS,
//   messagingSenderId: import.meta.env
//     .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
