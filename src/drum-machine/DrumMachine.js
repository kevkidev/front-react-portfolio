import { Component } from "react";
import CommonExternalLinks from "../common/CommonExternalLinks";
import CommonReturnLinks from "../common/CommonReturnLinks";
import "./DrumMachine.scss";

const Key = ({ name, audioId, clickAction }) => {
  const soundUrl = process.env.PUBLIC_URL + "/sound/".concat(audioId);
  return (
    <button
      id={"btn-" + name}
      className="drum-pad"
      onClick={() => clickAction(name)}
    >
      {name}
      <audio id={name} src={soundUrl} className="clip" />
    </button>
  );
};

const KEYS = {
  Q: { name: "2Pac Snare3", id: "2Pac Snare3.wav" },
  W: { name: "50 dre kick", id: "50 dre kick.wav" },
  E: { name: "50 dre snare", id: "50 dre snare.wav" },
  A: { name: "50 Synth", id: "50 Synth.wav" },
  S: { name: "808kick8", id: "808kick8.wav" },
  D: { name: "808LONG_", id: "808LONG_.WAV" },
  Z: { name: "BARYHAT1", id: "BARYHAT1.WAV" },
  X: { name: "01 HHclosed08", id: "01 HHclosed08.wav" },
  C: { name: "CKS Dre 1 SD", id: "CKS Dre 1 SD.wav" },
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
        <CommonExternalLinks urls={[process.env.REACT_APP_URL_GITHUB_DRUM]} />
        <div className="parent" onKeyPress={this.keyAction}>
          <div id="drum-machine" tabIndex={0}>
            <div className="controls">
              <div id="display">{this.state.soundName}</div>
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}
