import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsl7Jj9JzaM1XQwX5eQiyP0dDl0FI-Ll8",
  authDomain: "job-box-firebase.firebaseapp.com",
  projectId: "job-box-firebase",
  storageBucket: "job-box-firebase.appspot.com",
  messagingSenderId: "199049162384",
  appId: "1:199049162384:web:ad0eaff62047d1d5a33215"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)