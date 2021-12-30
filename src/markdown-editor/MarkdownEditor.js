import "./Style.scss";
import BoxContentEditor from "./BoxContentEditor";
import BoxHeader from "./BoxHeader";
import CommonReturnLinks from "../common/CommonReturnLinks";
import CommonExternalLinks from "../common/CommonExternalLinks";
import DOMPurify from "dompurify";

const { Component, Fragment } = require("react");
const EDIT = "Editor";
const VIEW = "Previewer";

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      editIsFull: false,
      viewIsFull: false,
    };
    this.getMarked = this.getMarked.bind(this);
  }

  getMarked(returnValue) {
    this.setState(() => ({
      elements: returnValue(),
    }));
  }

  toggleBox(title, value) {
    const state = { ...this.state };
    if (title === EDIT) state.editIsFull = value;
    else if (title === VIEW) state.viewIsFull = value;
    this.setState(() => state);
  }

  render() {
    let viewClass = "";
    let editClass = "";
    if (this.state.editIsFull) {
      viewClass = "hidden";
    } else if (this.state.viewIsFull) {
      editClass = "hidden";
    }

    return (
      <Fragment>
        <CommonReturnLinks />
        <CommonExternalLinks
          urls={[
            "https://github.com/kevkidev/front-react-portfolio/tree/develop/src/drum-machine",
          ]}
        />
        <div className="md-editor-container">
          <section id="section-editor" className={editClass}>
            <BoxHeader title={EDIT} toggle={this.toggleBox.bind(this)} />
            <BoxContentEditor getMarked={this.getMarked} />
          </section>
          <section id="section-previewer" className={viewClass}>
            <BoxHeader title={VIEW} toggle={this.toggleBox.bind(this)} />
            <div
              className="content"
              id="preview"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(this.state.elements.join("")),
              }}
            />
          </section>
        </div>
      </Fragment>
    );
  }
}
