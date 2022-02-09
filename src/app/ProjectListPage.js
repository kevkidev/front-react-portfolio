import { Fragment, lazy, Suspense } from "react";
import CommonReturnLinks from "../common/CommonReturnLinks";
import "./ProjectListPage.scss";

const ProjectList = lazy(() => import("./ProjectList"));

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
