import "./style.scss";
import { Link } from "react-router-dom";

export default function CommonReturnLinks() {
  return (
    <div className="common-return-links">
      <Link class="common-return-link" to="/projects">
        <i className="bi bi-arrow-return-left " />
        &nbsp;&nbsp;See more projects
      </Link>
      <Link class="common-return-link" to="/">
        <i className="bi bi-arrow-return-left " />
        &nbsp;&nbsp;Go to home
      </Link>
    </div>
  );
}
