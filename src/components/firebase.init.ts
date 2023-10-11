
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.REACT_APP_apiKey,
  apiKey:'AIzaSyDrdj7Rxt2O_rQf6YxjrunQlS-1pwvlZFY',
  authDomain:import.meta.env.REACT_APP_authDomain,
  projectId:import.meta.env.REACT_APP_projectId,
  storageBucket:import.meta.env.REACT_APP_storageBucket,
  messagingSenderId:import.meta.env.REACT_APP_messagingSenderId,
  appId:import.meta.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
