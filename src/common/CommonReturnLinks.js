import "./style.scss";
import { Link } from "react-router-dom";

export default function CommonReturnLinks() {
  return (
    <div className="common-return-links">
      <Link className="common-return-link" to="/projects">
        See more projects&nbsp;&nbsp;
        <i className="bi bi-arrow-return-left " />
      </Link>
      <Link className="common-return-link" to="/">
        Go to home&nbsp;&nbsp;
        <i className="bi bi-arrow-return-left " />
      </Link>
    </div>
  );
}
