import { Component, Fragment } from "react";
import CommonExternalLinks from "../common/CommonExternalLinks";
import CommonReturnLinks from "../common/CommonReturnLinks";
import "./style.scss";

const BREAK_ID = "break";
const SESSION_ID = "session";
const STATUS_STARTED = "start";
const STATUS_STOPPED = "stop";
const AUDIO_END = "beep";

export default class Chrono extends Component {
  constructor(props) {
    super(props);
    this.state = this._getDefaultState();
  }

  _getDefaultState() {
    return {
      breakLength: 5,
      sessionLength: 25,
      minuteCount: 25,
      secondCount: 0,
      currentCount: SESSION_ID, // can be BREAK_ID or SESSION_ID
      interval: null,
      status: "",
    };
  }

  increaseLength(id) {
    const newState = Object.create(this.state);
    if (BREAK_ID === id && this.state.breakLength < 60) {
      newState.breakLength++;
      this.setState(() => newState);
    } else if (SESSION_ID === id && this.state.sessionLength < 60) {
      newState.sessionLength++;
      newState.minuteCount = newState.sessionLength;
      this.setState(() => newState);
    }
  }

  decreaseLength(id) {
    const newState = Object.create(this.state);
    if (BREAK_ID === id && this.state.breakLength > 1) {
      newState.breakLength--;
      this.setState(() => newState);
    } else if (SESSION_ID === id && this.state.sessionLength > 1) {
      newState.sessionLength--;
      newState.minuteCount = newState.sessionLength;
      this.setState(() => newState);
    }
  }

  updateLength(event, id) {
    const value = Math.floor(event.target.value);
    const newState = Object.create(this.state);
    if (!isNaN(value) && value > 0 && value <= 60) {
      if (BREAK_ID === id) {
        newState.breakLength = value;
      } else if (SESSION_ID === id) {
        newState.sessionLength = value;
        newState.minuteCount = newState.sessionLength;
      }
      this.setState(() => newState);
    }
  }

  _countTime() {
    const newState = Object.create(this.state);
    if (newState.secondCount > 0) {
      newState.secondCount--;
    } else if (newState.minuteCount > 0 && newState.secondCount == 0) {
      newState.minuteCount--;
      newState.secondCount = 59; // 59 = 1 minute - 1s
    } else {
      document.getElementById(AUDIO_END).play();
      clearInterval(newState.interval);
      newState.secondCount = 0;
      if (BREAK_ID === newState.currentCount) {
        newState.currentCount = SESSION_ID;
        newState.minuteCount = newState.sessionLength;
      } else if (SESSION_ID === newState.currentCount) {
        newState.currentCount = BREAK_ID;
        newState.minuteCount = newState.breakLength;
      }
      this._startTimer();
    }
    this.setState(() => newState);
  }

  _startTimer() {
    const newState = Object.create(this.state);
    newState.status = STATUS_STARTED;
    newState.interval = setInterval(() => this._countTime(), 1000);
    this.setState(() => newState);
  }

  _stopTimer() {
    const newState = Object.create(this.state);
    newState.status = STATUS_STOPPED;
    clearInterval(newState.interval);
    newState.interval = null;
    this.setState(() => newState);
  }

  startStopTimer() {
    if (STATUS_STARTED === this.state.status) {
      this._stopTimer();
    } else {
      this._startTimer();
    }
  }

  resetTimer() {
    document.getElementById(AUDIO_END).pause();
    document.getElementById(AUDIO_END).currentTime = 0;
    const newState = Object.create(this.state);
    newState.status = "";
    clearInterval(newState.interval);
    this.setState(() => this._getDefaultState());
  }

  render() {
    const minuteCount =
      this.state.minuteCount < 10
        ? "0".concat(this.state.minuteCount)
        : this.state.minuteCount;
    const secondCount =
      this.state.secondCount < 10
        ? "0".concat(this.state.secondCount)
        : this.state.secondCount;
    const label = this.state.currentCount
      .charAt(0)
      .toUpperCase()
      .concat(this.state.currentCount.slice(1));

    return (
      <Fragment>
        <div className="chrono-container">
          <CommonReturnLinks />
          <CommonExternalLinks
            urls={[process.env.REACT_APP_URL_GITHUB_CHRONO]}
          />
          <div id="chrono">
            <audio
              id={AUDIO_END}
              src={process.env.PUBLIC_URL + "/sound/Door-Bell-Ding-A1.mp3"}
            />
            <h1>Interval Clock</h1>
            <div className="display">
              <p id="timer-label">{label}</p>
              <div id="time-left">
                {minuteCount}:{secondCount}
              </div>
            </div>

            <div className="settings">
              <div className="settings-item">
                <p id="break-label">Break Length</p>
                <div>
                  <i
                    id="break-decrement"
                    className="bi bi-arrow-down-circle-fill"
                    onClick={() => this.decreaseLength(BREAK_ID)}
                  />
                  <input
                    id="break-length"
                    type="number"
                    min="1"
                    max="60"
                    step="1"
                    value={this.state.breakLength}
                    onChange={(e) => this.updateLength(e, BREAK_ID)}
                    onClick={(e) => e.target.select()}
                  />
                  <i
                    id="break-increment"
                    className="bi bi-arrow-up-circle-fill"
                    onClick={() => this.increaseLength(BREAK_ID)}
                  />
                </div>
              </div>
              <div className="settings-item">
                <p id="session-label">Session Length</p>
                <div>
                  <i
                    id="session-decrement"
                    className="bi bi-arrow-down-circle-fill"
                    onClick={() => this.decreaseLength(SESSION_ID)}
                  />
                  <input
                    id="session-length"
                    type="number"
                    min="1"
                    max="60"
                    step="1"
                    value={this.state.sessionLength}
                    onChange={(e) => this.updateLength(e, SESSION_ID)}
                    onClick={(e) => e.target.select()}
                  />
                  <i
                    id="session-increment"
                    className="bi bi-arrow-up-circle-fill"
                    onClick={() => this.increaseLength(SESSION_ID)}
                  />
                </div>
              </div>
            </div>

            <div className="commands">
              <div id="start_stop" onClick={this.startStopTimer.bind(this)}>
                <i className="bi bi-play-circle-fill" />
                <i className="bi bi-pause-circle-fill" />
              </div>
              <i
                id="reset"
                className="bi bi-stop-circle-fill"
                onClick={this.resetTimer.bind(this)}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
