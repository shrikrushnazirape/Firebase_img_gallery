import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyACwp7vN4yre7MNwjPCMFntUM9sFpmkgd8",
    authDomain: "ninja-firegram-2b6a8.firebaseapp.com",
    projectId: "ninja-firegram-2b6a8",
    storageBucket: "ninja-firegram-2b6a8.appspot.com",
    messagingSenderId: "519127284413",
    appId: "1:519127284413:web:123632c23675713a1b55d4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage , projectFirestore, timestamp}