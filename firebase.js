// Import the functions you need from the SDKs you need
//import firebase from "firebase/app";
//import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
import "firebase/compat/analytics"; 

import { getAuth } from "firebase/auth";
//import * as firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACDQY_sKpOUeRbTeYc6dNXwNAKwI5Jnys",
  authDomain: "cooktrition-facts-d4ac7.firebaseapp.com",
  projectId: "cooktrition-facts-d4ac7",
  storageBucket: "cooktrition-facts-d4ac7.appspot.com",
  messagingSenderId: "70139092961",
  appId: "1:70139092961:web:fd5b8a68f175e946eafca0",
  measurementId: "G-P1RRHJZRS0"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const analytics = firebase.analytics();

const auth = firebase.auth();

const db = firebase.firestore();


export { auth, db };
//Android - 741806464382-1astf3i0cn341ok1f1u718vjrp53iuvs.apps.googleusercontent.com
//Web ID - 741806464382-266013294dur6bc27vkvengbafj6cclj.apps.googleusercontent.com