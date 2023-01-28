// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { signOut,GithubAuthProvider } from 'firebase/auth';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBjxjaSDQc1VLPgnLESBW3YCHehHjpd7I",
  authDomain: "my-blog-app-7bb35.firebaseapp.com",
  projectId: "my-blog-app-7bb35",
  storageBucket: "my-blog-app-7bb35.appspot.com",
  messagingSenderId: "1009350763345",
  appId: "1:1009350763345:web:a573c1673b5f23c3dda970"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();


// Singin With Google Implementation
auth.languageCode = 'it';

export const signOutUser = ()=>{
  return signOut(auth);
}

export const signInWithGoogle = async ()=>{
  const result  = await signInWithPopup(auth,new GoogleAuthProvider());
  // const result = signInWithRedirect(auth,new GoogleAuthProvider());

  return result;
}

export const signInWithGithub = async ()=>{
  const result = await signInWithPopup(auth, new GithubAuthProvider());
  return result;
}



