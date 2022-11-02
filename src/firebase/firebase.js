import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove, update, onValue, get, off, push, onChildRemoved, onChildChanged, onChildAdded} from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    databaseURL: process.env.FIREBASE_DATABASE_URL
};

export const firebase = initializeApp(firebaseConfig);

export const database = getDatabase();
