import "./style.scss";
import { Link } from "react-router-dom";

export default function CommonExternalLinks({ urls }) {
  return (
    <div className="common-external-links">
      <a className="common-external-link" href={urls[0]} target="__blank">
        <i className="bi bi-arrow-return-right " />
        &nbsp;&nbsp;See source code <i className="bi bi-github" />
      </a>
    </div>
  );
}
