const { Component } = require("react");

export default class BoxHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isFull: false };
  }

  toggle() {
    const state = Object.assign({}, this.state);
    state.isFull = !state.isFull;
    this.setState(() => state);
    this.props.toggle(this.props.title, state.isFull);
  }

  render() {
    return (
      <div className="box-header">
        <div>
          <i className="bi bi-markdown" />
          <span>{this.props.title}</span>
        </div>
        <div onClick={this.toggle.bind(this)}>
          {this.state.isFull && <i className="bi bi-fullscreen-exit" />}
          {!this.state.isFull && <i className="bi bi-arrows-fullscreen" />}
        </div>
      </div>
    );
  }
}
