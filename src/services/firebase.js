// connecting to google firebase realtime database

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "ijfozijfozijefoizjoef",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const database = Rebase.createClass(firebase.databaseURL);
const database = null; //getDatabase(app);
// export const auth = app.auth();

// const provider = new auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firebaseConfig };
export default database;
