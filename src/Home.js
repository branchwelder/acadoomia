import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./setup";
import { query, collection, getDocs, where } from "firebase/firestore";

import "./styles/Home.css";

function Home() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      <div className='toolbar'>
        <span>{name}'s library</span>
        <button className='toolbarButton' onClick={logout}>
          Logout
        </button>
      </div>
      <div className='pageContainer'>
        <div className='projects'></div>
        <div className='library'></div>
      </div>
    </div>
  );
}

export default Home;
