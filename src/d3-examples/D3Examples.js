const { Component } = require("react");

export default class D3Examples extends Component {
  componentDidMount() {
    import("d3").then((d3) => {
      d3.selectAll("#d3").text("Test ok :)");
    });
  }
  render() {
    return <div id="d3">Initial text</div>;
  }
}
