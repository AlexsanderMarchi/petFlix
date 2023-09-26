// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-YAW1n9NbVbAsgf1bw8q00cIXUPtVSdo",
  authDomain: "petflix-839d0.firebaseapp.com",
  projectId: "petflix-839d0",
  storageBucket: "petflix-839d0.appspot.com",
  messagingSenderId: "38217464403",
  appId: "1:38217464403:web:6c43ac3f5db8c8a459a4a6"
};

// Initialize Firebase
exports.app = initializeApp(firebaseConfig);
