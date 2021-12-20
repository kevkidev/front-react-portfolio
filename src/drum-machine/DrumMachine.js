import "./style.scss";
import { Component } from "react";
import CommonReturnLinks from "../common/CommonReturnLinks";

const Key = ({ name, audioId, clickAction }) => {
  const SERVER_URL = "https://docs.google.com/uc?export=download&id=";
  const AUDIO_SRC = SERVER_URL.concat(audioId);
  return (
    <button
      id={"btn-" + name}
      className="drum-pad"
      onClick={() => clickAction(name)}
    >
      {name}
      <audio id={name} src={AUDIO_SRC} className="clip" />
    </button>
  );
};

const KEYS = {
  Q: { name: "Toy Souljah Snare", id: "1KamtQoVQ0wGEqcxoRKSYcJQmeRosGsbB" },
  W: { name: "Tambourine", id: "1-DFhbWWfkNqMGrPrUg3MXSJe3hGBqAuj" },
  E: { name: "Shady Crash", id: "1ccD-WRF6qUCq1kJsOwRDpCEaZ21QjoBj" },
  A: { name: "50 dre Kick", id: "1z1rdfPOxBoxXa3InOTqYoA7DFmsbX1_b" },
  S: { name: "CKS Urban Clap", id: "1FLszu7toLd5cX-KCHa95GvHEksogtSYo" },
  D: { name: "CKS Teddy P SD", id: "1ppnangWS0DhaIaR2jjQ0w2G_iR9cy21f" },
  Z: { name: "CKS Swizz SD", id: "18YqbN_z40dmxSPgD6m0wDbqUJfIn-8pS" },
  X: { name: "CKS Dre 4 SD", id: "1odVKngqZH79hY-8t-US0dX7oeOJ1WHe0" },
  C: { name: "CKS Dre 2 SD", id: "1qOWrj5Z8E8RjPK76uyYOTBZa4ShQ2Xug" },
};

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundName: "--",
    };
    this.keyAction = this.keyAction.bind(this);
    this.clickAction = this.clickAction.bind(this);

    this.select = (key) => {
      const soundName = KEYS[key].name;
      this.setState({
        soundName,
      });
      const audio = document.getElementById(key);
      audio && audio.play();
    };
  }
  componentDidMount() {
    document.getElementById("drum-machine").focus();
  }

  clickAction(key) {
    this.select(key);
  }

  keyAction(event) {
    const key = event.key.toUpperCase();
    const isValid =
      Object.keys(KEYS).filter((e) => e.toUpperCase() == key).length > 0;
    isValid && this.select(key);
  }

  render() {
    return (
      <div
        id="project-drum-machine"
        className="container-fluid drum-machine-container"
      >
        <CommonReturnLinks />
        <div className="parent" onKeyPress={this.keyAction}>
          <div id="drum-machine" tabIndex={0}>
            <div className="pads">
              {Object.keys(KEYS).map((e) => (
                <Key
                  key={KEYS[e].id}
                  name={e.toUpperCase()}
                  audioId={KEYS[e].id}
                  clickAction={this.clickAction}
                />
              ))}
            </div>
            <div className="controls">
              <div id="display">{this.state.soundName}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
