// to include firebase in your react-native app:
// 1. setup web app in firebase (not ios or android, if you're using expo)
// 2. paste these in the app.js file (the main file)

import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "123",
  authDomain: "123",
  projectId: "123",
  storageBucket: "123",
  messagingSenderId: "123",
  appId: "123",
  measurementId: "123"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// if you want to use analytics?
firebase.analytics();
