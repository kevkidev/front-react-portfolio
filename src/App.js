import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import "./App.scss";
import database from "./services/firebase";
import { ref, set, onValue } from "firebase/database";
import { Component } from "react";
import ProjectList from "./ProjectList";

class App extends Component {
  componentDidMount() {
    // add to db
    // set(ref(database, "user/" + 44), {
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

  render() {
    return (
      <Fragment>
        <div className="app">
          <nav id="app-navbar" className="app-navbar">
            <a className="app-nav-link app-a" href="#app-welcome-section">
              About
            </a>
            <a className="app-nav-link app-a" href="#app-projects-section">
              Projects
            </a>
            <a className="app-nav-link app-a" href="#app-contact-section">
              Contact
            </a>
          </nav>

          <main>
            <section id="app-welcome-section" className="app-section">
              <div>
                <h1 className="app-h1">Kevin M. aka KevKiDev</h1>
                <p>a React Frontend Developer</p>
              </div>
            </section>

            <section id="app-projects-section" className="app-section">
              <header>Here are some of my projects</header>
              <ProjectList limit={6} />
              <Link id="app-a-profile-link" to="/projects">
                See all projects ...
              </Link>
            </section>

            <section id="app-contact-section" className="app-section">
              <div>
                <h1 className="app-h1">Let's collaborate together ...</h1>
                <h2 className="app-h2">View more and contact me on:</h2>
                <a href="https://www.linkedin.com/in/kevkidev/">
                  <i className="bi bi-linkedin" />
                  LinkedIn
                </a>
                <a href="https://gist.github.com/kevkidev">
                  <i className="bi bi-github" />
                  GitHub
                </a>
              </div>
            </section>
          </main>
          <footer className="app-footer">
            {/* **This is just a fake portfolio. All the projects and contact details
          given are not real. */}
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default App;
