import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqzDyn5hpZhIasXWSVCXEuUx7BWWX8IxM",
  authDomain: "acadoomia1.firebaseapp.com",
  projectId: "acadoomia1",
  storageBucket: "acadoomia1.appspot.com",
  messagingSenderId: "638582686786",
  appId: "1:638582686786:web:baa0e6b056e9e9d6fa59db",
  measurementId: "G-Q3E0PGSF95",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

db.send = async function (msg, collectionName) {
  return addDoc(collection(db, collectionName), msg);
};
db.edit = async function (id, msg, collectionName) {
  return setDoc(doc(db, collectionName, id), msg);
};
db.delete = async function (id, collectionName) {
  return deleteDoc(doc(db, collectionName, id));
};
db.getCollection = async function (collectionName) {
  return getDocs(collection(db, collectionName));
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
