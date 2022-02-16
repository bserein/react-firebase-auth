// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLMfhafKl_QOFyUU0MXro9J10I4jLm6Uc",
  authDomain: "fir-auth-bas.firebaseapp.com",
  projectId: "fir-auth-bas",
  storageBucket: "fir-auth-bas.appspot.com",
  messagingSenderId: "708037061545",
  appId: "1:708037061545:web:eadab18625058d10e332b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//you can just put export behind it and just import this app anywhere now