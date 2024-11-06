// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-oDzMRXzsgzl-SXkTduECbWHno091V5c",
  authDomain: "watchwiz-93975.firebaseapp.com",
  projectId: "watchwiz-93975",
  storageBucket: "watchwiz-93975.firebasestorage.app",
  messagingSenderId: "1000830366829",
  appId: "1:1000830366829:web:e71eb9e0cb84b8d87fbb64",
  measurementId: "G-LNDHF8BFRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;