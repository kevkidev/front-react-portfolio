import "./ProjectListPage.scss";
import { Fragment, lazy, Suspense } from "react";
import CommonReturnLinks from "../common/CommonReturnLinks";

const ProjectList = lazy(() => import("./ProjectList"));
const style = {
  textAlign: "center",
};

export default function ProjectListPage() {
  return (
    <Fragment>
      <CommonReturnLinks />
      <div className="div-project-list-page">
        <h1>Welcome to my projects</h1>
        <Suspense fallback={<div>Loading ...</div>}>
          <ProjectList limit={0} />
        </Suspense>
      </div>
    </Fragment>
  );
}
