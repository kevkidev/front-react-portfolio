import { Fragment } from "react";
import { useParams } from "react-router-dom";

export default function Login(props) {
  let params = useParams();
  console.log(params);
  return (
    <Fragment>
      <h1>Hello {params.login}!</h1>
    </Fragment>
  );
}
