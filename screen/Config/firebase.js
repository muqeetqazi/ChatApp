// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLn0QLNHxoVHssbZdn-7ClvI-pl05Ebuo",
  authDomain: "chatapps-1f7bc.firebaseapp.com",
  projectId: "chatapps-1f7bc",
  storageBucket: "chatapps-1f7bc.appspot.com",
  messagingSenderId: "287157554670",
  appId: "1:287157554670:web:f512345c09ec18f33492ff",
  measurementId: "G-ZEYG5QHX67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;