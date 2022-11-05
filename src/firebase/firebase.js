import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove, update, onValue, get, off, push, onChildRemoved, onChildChanged, onChildAdded} from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

export const firebase = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();

export const database = getDatabase();
