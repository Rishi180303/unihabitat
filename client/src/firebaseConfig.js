// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7EB-B4i5jpjmhrAM9-iz4Wk_3gOxhO50",
  authDomain: "unihabitat-b1558.firebaseapp.com",
  projectId: "unihabitat-b1558",
  storageBucket: "unihabitat-b1558.firebasestorage.app",
  messagingSenderId: "632962118308",
  appId: "1:632962118308:web:083c1943837659e2616c31",
  measurementId: "G-TTYD2KVSY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);