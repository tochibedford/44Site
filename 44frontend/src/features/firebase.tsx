// import firebase from "firebase";


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7ccywVMCExG2-OFMvbWWkw9D_fdmn79M",
  authDomain: "contactform-d40c1.firebaseapp.com",
  databaseURL: "https://contactform-d40c1-default-rtdb.firebaseio.com",
  projectId: "contactform-d40c1",
  storageBucket: "contactform-d40c1.appspot.com",
  messagingSenderId: "662257023713",
  appId: "1:662257023713:web:bb5f1a33cc2d746f7655a0",
  measurementId: "G-51E91QFCEM",
};

//fire base init
var firebaseApp = firebase.initializeApp(firebaseConfig);

//referencing database
var contactFormDB = firebase.firestore();

export { contactFormDB };
