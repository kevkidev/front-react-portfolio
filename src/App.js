import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import "./App.scss";
import { Component, lazy, Suspense } from "react";

const ProjectList = lazy(() => import("./ProjectList"));

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
            <a className="app-nav-link app-a" href="#app-footer">
              Source
            </a>
          </nav>

          <main>
            <section id="app-welcome-section" className="app-section">
              <div>
                <h1 className="app-h1 title">ReactFrontendDeveloper</h1>
                <p className="sub-title">by Kevin M. aka KevKiDev</p>
              </div>
            </section>

            <section id="app-projects-section" className="app-section">
              <header>Here are some of my projects</header>
              <Suspense fallback={<div>Loading projects...</div>}>
                <ProjectList limit={6} />
              </Suspense>
              <Link to="/projects">More projects</Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a href="#app-contact-section">
                More about me <i className="bi bi-arrow-down"></i>
              </a>
            </section>

            <section id="app-contact-section" className="app-section">
              <div>
                <h1 className="app-h1">Let's collaborate together</h1>
                <h2 className="app-h2">See more and contact me on</h2>
                <a href="https://gist.github.com/kevkidev">
                  <i className="bi bi-github" />
                </a>
                <a href="https://www.linkedin.com/in/kevkidev/">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </section>
          </main>
          <footer id="app-footer" className="app-footer">
            <span>&copy;2022 powered by Kevkidev</span>
            <a
              href="https://github.com/kevkidev/front-react-portfolio"
              className="app-a"
            >
              See full source code on <i className="bi bi-github" />
            </a>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default App;
