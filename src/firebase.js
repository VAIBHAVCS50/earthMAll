// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDomzQO6AFAAwABWH-M6rTE2Mph2sSboU",
    authDomain: "earthmall-c2d55.firebaseapp.com",
    projectId: "earthmall-c2d55",
    storageBucket: "earthmall-c2d55.appspot.com",
    messagingSenderId: "422745089030",
    appId: "1:422745089030:web:3fb6398b6c7b1aa4350f87",
    measurementId: "G-66R043LVGF"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth();

  const db = getFirestore(firebaseApp);

//   export const app = initializeApp(firebaseConfig);


  export { db, auth };