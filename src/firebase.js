import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCej8WRhYEGbBjaMoJBLuDpJ2j2W2iJvyw",
  authDomain: "instagram-clone-react-dbf23.firebaseapp.com",
  projectId: "instagram-clone-react-dbf23",
  storageBucket: "instagram-clone-react-dbf23.appspot.com",
  messagingSenderId: "712404822578",
  appId: "1:712404822578:web:82ddde665413cfe710aa2b",
  measurementId: "G-8CCQ45DCMX",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
const firebaseConfig = {};
