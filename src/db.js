// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

let store;
const collection_name = "papers";

const firebaseConfig = {
  apiKey: "AIzaSyBqzDyn5hpZhIasXWSVCXEuUx7BWWX8IxM",
  authDomain: "acadoomia1.firebaseapp.com",
  projectId: "acadoomia1",
  storageBucket: "acadoomia1.appspot.com",
  messagingSenderId: "638582686786",
  appId: "1:638582686786:web:baa0e6b056e9e9d6fa59db",
  measurementId: "G-Q3E0PGSF95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
store = getFirestore(app);

const db = {};
db.send = async function (msg) {
  return addDoc(collection(store, collection_name), msg);
};
db.edit = async function (id, msg) {
  return setDoc(doc(store, collection_name, id), msg);
};
db.delete = async function (id) {
  return deleteDoc(doc(store, collection_name, id));
};
db.getCollection = async function (collectionName) {
  return getDocs(collection(store, collectionName));
};

export { db };
