// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAqP-RCew4Sc1AqPRNy8IIZ7CaBb7aMkk",
  authDomain: "gastrogate-925db.firebaseapp.com",
  projectId: "gastrogate-925db",
  storageBucket: "gastrogate-925db.appspot.com",
  messagingSenderId: "102672647408",
  appId: "1:102672647408:web:2ed61049d2eefdeb0f2e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const auth = getAuth(app);

export const db = getFirestore(app);