import "./style.scss";
import { Link } from "react-router-dom";
import * as routes from "./routes";

export default function CommonReturnLinks() {
  return (
    <div className="common-return-links">
      <Link className="common-return-link" to={routes.PATH_PROJECTS}>
        See more projects&nbsp;&nbsp;
        <i className="bi bi-arrow-return-left " />
      </Link>
      <Link className="common-return-link" to={routes.PATH_ROOT}>
        Go to home&nbsp;&nbsp;
        <i className="bi bi-arrow-return-left " />
      </Link>
    </div>
  );
}
