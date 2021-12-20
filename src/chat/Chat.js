import { onValue, ref, set } from "firebase/database";
import { Component, Fragment } from "react";
import { useParams } from "react-router-dom";
import database from "../services/firebase";

export default class Chat extends Component {
  state = {
    messages: {},
    pseudo: "kev",
    maxLength: 150,
  };

  componentDidMount() {
    // add to db
    // set(ref(database, "messages/" + 44), {
    //   username: "kevv",
    //   email: "erzere@idjofjsdof",
    // });
    // get from db
    // const starCountRef = ref(database, "user/" + 44);
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(data);
    // });
    // update from db
    // delete from db
  }

  componentDidUpdate() {}

  handleChange(event) {
    console.log("jejdjd");
    const newState = { ...this.state };
    newState.maxLength -= event.target.value.length;
    this.setState(() => newState);
  }

  render() {
    // console.log(this.props);
    return (
      <Fragment>
        <h1>Welcome to chat!</h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          maxLength={this.state.maxLength}
          onChange={this.handleChange.bind(this)}
        ></textarea>
        <p>{this.state.maxLength}</p>
        <button onClick={() => console.log("click")}>Send</button>
      </Fragment>
    );
  }
}
