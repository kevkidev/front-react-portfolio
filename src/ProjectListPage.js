import { Fragment } from "react/cjs/react.production.min";
import CommonReturnLinks from "./common/CommonReturnLinks";
import ProjectList from "./ProjectList";
const style = {
  textAlign: "center",
};
export default function ProjectListPage() {
  return (
    <Fragment>
      <CommonReturnLinks />
      <div style={style}>
        <h1 style={{ color: "white" }}>Welcome to my projects</h1>
        <ProjectList limit={0} />
      </div>
    </Fragment>
  );
}
