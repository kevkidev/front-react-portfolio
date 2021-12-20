import "./NotFoundPage.scss";
import CommonReturnLinks from "./common/CommonReturnLinks";

function NotFoundPage() {
  return (
    <div className="app-not-found">
      <h1>Oups! There is nothing to see here :/</h1>
      <CommonReturnLinks />
    </div>
  );
}
export default NotFoundPage;
