import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//from the docs
const config = {
  apiKey: "AIzaSyBrVEwYxpSf5ZUWa-i4t9-Nv0OfJ34FKU8",
  authDomain: "dw-clothing-db.firebaseapp.com",
  projectId: "dw-clothing-db",
  storageBucket: "dw-clothing-db.appspot.com",
  messagingSenderId: "727234459421",
  appId: "1:727234459421:web:9b527ab4de0a257e6813f4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up to use google auth --> configured on firebase GUI side as well
const provider = new firebase.auth.GoogleAuthProvider();
//prompt to select account
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
