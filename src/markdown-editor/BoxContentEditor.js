import { marked } from "marked";
import { Component, Fragment } from "react";

// -----------------------------------------------------------------------------
const DEFAULT =
  "# Help\n## Code inline\nUse `command` to blabla ...\n## Code block\nSome basic Git commands are:\n```\ngit status\ngit add\ngit commit\n```\n## List\n\n1. Truc \n2. Machin\n3. Bidule\n\n## Link\nVoir la doc sur [GitHub : Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).\n\n> Text that is a quote\n\n**This is bold**\n\n![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)\n\n\n";

export default class BoxContentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: DEFAULT,
    };
  }

  componentDidMount() {
    this.props.getMarked(() => [marked.parse(this.state.value)]);
  }

  parseValue(event) {
    this.props.getMarked(() =>
      event.target.value.split("\n").map((e) => marked.parse(e))
    );
    this.setState(() => ({ value: event.target.value }));
  }

  render() {
    return (
      <Fragment>
        <textarea
          id="editor"
          placeholder="markdown"
          onChange={this.parseValue.bind(this)}
          value={this.state.value}
        ></textarea>
      </Fragment>
    );
  }
}
