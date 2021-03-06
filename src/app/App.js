import { Component, Fragment, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  REACT_APP_URL_GITHUB_APP,
  REACT_APP_URL_GITHUB_PROFILE,
  REACT_APP_URL_LINKED_IN_PROFILE,
} from "../common/urls";
import "./App.scss";

const ProjectList = lazy(() => import("./ProjectList"));

function test() {
  return;
}

const skills = [
  "React v16+",
  "React Router v5/6",
  "React hooks",
  "React Hook From",
  "Yup (form validation)",
  "Context API",
  "Redux",
  "ESnext",
  "JavaScript",
  "TypeScript",
  "ES Lint",
  "Prettier",
  "Regular Expressions",
  "Algorithm scripting",
  "Functional Programming",
  "API AJAX",
  "Fetch API",
  "Google Firebase Authentification",
  "Google Firebase Realtime Database",
  "Jest",
  "HTML 5",
  "CSS 3",
  "SASS",
  "CSS Flexbox",
  "CSS Grid",
  "CSS Animation",
  "Bootstrap",
  "Jquery",
  "D3.js",
  "Npm",
  "Webpack",
  "SEO",
  "Accessibility",
  "Git",
  "GitHub",
  "GitLab",
  "VS Code",
  "Color Theory",
  "Heroku",
  "SOLID",
];

class App extends Component {
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
              <h1 className="app-h1 title">ReactFrontendDeveloper</h1>
              <p className="sub-title">by Kevin M. aka KevKiDev</p>
              <p className="presentation">
                This website has built using the <em>React</em> library and some
                of the associated ecosystem. See the{" "}
                <a href={REACT_APP_URL_GITHUB_APP} target="__blank">
                  {" "}
                  full source code here
                </a>
                . I used both <em>Redux</em> and <em>Context</em> tools,{" "}
                <em>react-router-dom v4+</em> for the main navigation bar and
                routing and <em>SASS</em> for the design. See small projects's
                short description to know which technology I have used for each
                one.
              </p>
              <h2>I use some of these skills into the projects bellow</h2>
              <div className="keywords">
                {skills.map((e, i) => (
                  <span className="badge" key={i}>
                    {e}
                  </span>
                ))}
              </div>
              <a href="#app-projects-section" className="section-button">
                See the main of my personal projects
                <i className="bi bi-arrow-down"></i>
              </a>
            </section>

            <section id="app-projects-section" className="app-section">
              <header>Some of my projects</header>
              <Suspense fallback={<div>Loading projects...</div>}>
                <ProjectList limit={6} />
              </Suspense>
              <Link to="/projects" className="section-button">
                <i className="bi bi-arrow-right"></i> More projects
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a href="#app-contact-section" className="section-button">
                More about me <i className="bi bi-arrow-down"></i>
              </a>
            </section>

            <section id="app-contact-section" className="app-section">
              <div>
                <h1 className="app-h1">Let's collaborate together</h1>
                <h2 className="app-h2">
                  See my curriculum vitae and contact me on
                </h2>
                <a
                  href={REACT_APP_URL_GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github" />
                </a>
                <a
                  href={REACT_APP_URL_LINKED_IN_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </section>
          </main>
          <footer id="app-footer" className="app-footer">
            <span>&copy;2022 by Kevkidev</span>
            <a href={REACT_APP_URL_GITHUB_APP} className="app-a">
              See full source code on <i className="bi bi-github" />
            </a>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default App;
