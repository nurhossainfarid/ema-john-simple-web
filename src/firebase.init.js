// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByBlPnb1lUArtC2iJwJDX8DVONktMMyiQ",
  authDomain: "ema-john-simple-web-2896c.firebaseapp.com",
  projectId: "ema-john-simple-web-2896c",
  storageBucket: "ema-john-simple-web-2896c.appspot.com",
  messagingSenderId: "1008480819535",
  appId: "1:1008480819535:web:5c4410e2e1d52169588d3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;