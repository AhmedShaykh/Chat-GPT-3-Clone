import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI0VwVCpN1gvh5iZRzTW9GUl_ehuSZmxY",
    authDomain: "chat-gpt-3-server.firebaseapp.com",
    projectId: "chat-gpt-3-server",
    storageBucket: "chat-gpt-3-server.appspot.com",
    messagingSenderId: "213013660667",
    appId: "1:213013660667:web:fd0ed7c6f9e0fe69bc015e"
};

// Initialize Firebase
const app = getApps().length ? getApp : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };