// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJhzgH5LwGzgouquK5XfzHK6M8Bf1SWT4",
  authDomain: "house-project-c2817.firebaseapp.com",
  projectId: "house-project-c2817",
  storageBucket: "house-project-c2817.appspot.com",
  messagingSenderId: "865064762792",
  appId: "1:865064762792:web:541b02ed2c25e7e7eff19d",
  measurementId: "G-NY90GTME48",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
