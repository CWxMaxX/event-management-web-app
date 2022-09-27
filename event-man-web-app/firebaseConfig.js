// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaG5V7I07TFsqsZskxELIkb5a3BD4h_eE",
  authDomain: "event-planer-e5183.firebaseapp.com",
  projectId: "event-planer-e5183",
  storageBucket: "event-planer-e5183.appspot.com",
  messagingSenderId: "979705508637",
  appId: "1:979705508637:web:680858b8291808f15f27f4",
  measurementId: "G-1T77535MYN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
