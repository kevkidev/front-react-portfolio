import { Suspense } from "react";
import { lazy } from "react/cjs/react.development";
import { Fragment } from "react/cjs/react.production.min";
import CommonReturnLinks from "../common/CommonReturnLinks";
const ProjectList = lazy(() => import("./ProjectList"));
const style = {
  textAlign: "center",
};

export default function ProjectListPage() {
  return (
    <Fragment>
      <CommonReturnLinks />
      <div style={style}>
        <h1 style={{ color: "white" }}>Welcome to my projects</h1>
        <Suspense fallback={<div>Loading ...</div>}>
          <ProjectList limit={0} />
        </Suspense>
      </div>
    </Fragment>
  );
}
