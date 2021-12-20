import firebase from "firebase/app";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { signInWithGoogle } from "./services/firebase";

export default function Login(props) {
  // let params = useParams();
  // console.log(params);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // }, []);
  return (
    <Fragment>
      {/* <h1>Hello {params.login}!</h1>
      <button className="button" onClick={signInWithGoogle}>
        <i className="fab fa-google"></i>Sign in with google
      </button> */}
    </Fragment>
  );
}
