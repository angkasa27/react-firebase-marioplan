import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA9qzbvhGZa-A4nHy5Q8AjrbTMOQ7gOom4",
  authDomain: "netninja-marioplan-9a506.firebaseapp.com",
  projectId: "netninja-marioplan-9a506",
  storageBucket: "netninja-marioplan-9a506.appspot.com",
  messagingSenderId: "889603928218",
  appId: "1:889603928218:web:5081d8e8cd43a2e5e46f23",
  measurementId: "G-GVS4X4T98E",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default firebase;
