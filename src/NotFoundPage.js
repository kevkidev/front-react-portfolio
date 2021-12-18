import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

function NotFoundPage() {
  return (
    <Fragment>
      <h1>Oups! your are lost ?</h1>
      <Link to="/">Return</Link>
    </Fragment>
  );
}
export default NotFoundPage;
