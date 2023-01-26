// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { signOut } from 'firebase/auth';

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

  return result;
    // .then((result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   // The signed-in user info.
    //   const user = result.user;

      
    //   // console.log(user);
    //   // ...
    // }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
}



