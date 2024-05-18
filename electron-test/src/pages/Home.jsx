import React, { useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const HomePage = () => {

  useEffect(()=> {
    const fetchUsers = async () => {
      const docRef = doc(db, process.env.REACT_APP_FIREBASE_COLLECTION_NAME, process.env.REACT_APP_FIREBASE_DOCUMENT_NAME);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
    };

    fetchUsers();
  },[])

  return (
    <div className="home-page">
    <div className='bg-red-500 h-[200px] text-[100px]'>Welcome {process.env.REACT_APP_HELLO}</div>
  </div>
  )
};

export default HomePage;