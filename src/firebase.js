import firebase from "firebase";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtCQ8v2qWMW2exF0ft4vlJS-3nmRCkF0E",
  authDomain: "vue-pro-b4195.firebaseapp.com",
  projectId: "vue-pro-b4195",
  storageBucket: "vue-pro-b4195.appspot.com",
  messagingSenderId: "906051742635",
  appId: "1:906051742635:web:786a89db424ba09feb40ee",
  measurementId: "G-158X6WV1ZZ",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
