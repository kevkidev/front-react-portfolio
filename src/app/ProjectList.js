import { Fragment } from "react";
import { Link } from "react-router-dom";
import { PATH_MARKDOWN_EDITOR } from "../common/routes";
import { URL_RECOM } from "../common/urls";
import "./ProjectList.scss";

const projects = [
  {
    route: URL_RECOM,
    title: "React e-commerce",
    imageSrc: "coming-soon.jpg",
    display: true,
    external: true,
    description:
      "(IN PROGRESS) Fake demo e-commerce. Now you can sign up/in, create and modify Sell/Catalogs and Sell/Products...",
    keywords: [
      "React",
      "React Hooks",
      "React Rooter v6",
      "React Hook Form",
      "Yup form validation",
      "TypeScript",
      "Eslint",
      "Fetch API",
      "express.js",
      "JWT Token",
      "Google Firebase",
      "Firebase Auth",
      "Firebase Realtime DB",
      "Boostrap",
      "Sass",
      "Git",
      "GitHub",
      "Heroku",
      "Prettier",
      "lodash",
      "Jest",
      "SOLID",
    ],
  },
  {
    route: "/projects/chat",
    title: "React Chat",
    imageSrc: "coming-soon.jpg",
    display: false,
    description: "",
    keywords: [],
  },
  {
    route: "/projects/time-interval",
    title: "React Time interval",
    imageSrc: "fcc-time-interval-react.PNG",
    display: true,
    description: "Set your work time and your break time and loop it.",
    keywords: ["audio", "interval", "SASS", "JSX", "HTML5", "Flexbox"],
  },
  {
    route: "/projects/calculator",
    title: "React Calculator",
    imageSrc: "fcc-calc-react.PNG",
    display: true,
    description:
      "Perform simple calculation and show the last operation and reuse it.",
    keywords: [
      "regexp",
      "state",
      "redux",
      "context",
      "SASS",
      "JSX",
      "HTML5",
      "CSS GRID",
      "Git",
      "GitHub",
    ],
  },
  {
    route: PATH_MARKDOWN_EDITOR,
    title: "React Markdown Editor",
    imageSrc: "fcc-markdown-html-css.PNG",
    external: false,
    display: true,
    description: "Write HTML using markdown conversion.",
    keywords: [
      "marked.js",
      "DOMPurify",
      "Responsive WEB Design",
      "media query",
      "flexbox",
    ],
  },
  {
    route: "/projects/drum-machine",
    title: "React Drum Machine",
    imageSrc: "fcc-drum-machine-react.PNG",
    display: true,
    description: "Create music using the pads.",
    keywords: ["audio", "JSX", "CSS Grid", "SASS"],
  },
  {
    route: "https://codepen.io/kevkidev/full/BawKJOV",
    title: "React Random Quote Machine",
    imageSrc: "fcc-random-quote-react.PNG",
    external: true,
    display: true,
    description: "",
    keywords: ["React", "CSS", "SASS", "JSX"],
  },
  {
    route: "https://codepen.io/kevkidev/full/dyzLYOb",
    title: "Responsive Survey Form",
    imageSrc: "fcc-survey-form-html-css.PNG",
    external: true,
    display: true,
    description: "",
    keywords: ["HTML", "form", "input", "CSS", "media query"],
  },
  {
    route: "https://codepen.io/kevkidev/full/WNEWMmx",
    title: "Responsive Technical doc template",
    imageSrc: "fcc-technical-doc-template.PNG",
    external: true,
    display: true,
    description: "",
    keywords: ["HMTL", "CSS", "media query"],
  },
  {
    route: "https://codepen.io/kevkidev/full/PoKgOQb",
    title: "Responsive Product Landing Page",
    imageSrc: "fcc-product-landing-page-html-css.PNG",
    external: true,
    display: true,
    description:
      "Product Landing Page fully SEO optimized. \nKeywords : HTML, CSS, SEO, media query",
    keywords: [],
  },
  {
    route: "https://codepen.io/kevkidev/full/rNzbaoL",
    title: "Responsive Tribute",
    imageSrc: "fcc-tribute-html-css.PNG",
    external: true,
    display: true,
    description: "",
    keywords: ["HTML", "CSS", "media query", "flexbox"],
  },
];

function ProjectList({ limit }) {
  const TileContent = ({ project }) => (
    <Fragment>
      <img
        src={process.env.PUBLIC_URL + "/img/projects/" + project.imageSrc}
        alt={project.title + " image"}
      />
      <p className="title">{project.title}</p>
      <p className="keywords">
        {project.keywords.map((k, i) => (
          <span className="badge" key={i}>
            {k}
          </span>
        ))}
      </p>
      <p className="description">{project.description}</p>
    </Fragment>
  );

  let count = limit > 0 ? limit : projects.length;

  return (
    <div className="app-projects-list">
      {projects
        .filter((p) => p.display)
        .slice(0, count)
        .map((project, i) => {
          return (
            <div key={`project-${i}`} className="app-div-project-tile">
              {project.external && (
                <a
                  className="project-item"
                  href={project.route}
                  target="__blank"
                  onClick={() =>
                    alert(
                      'You will redirect to an external web site.\nYou should be able to see the source code by clicking on the top right button "View in Editor".'
                    )
                  }
                >
                  <TileContent project={project} />
                </a>
              )}
              {!project.external && (
                <Link className="project-item" to={project.route}>
                  <TileContent project={project} />
                </Link>
              )}
            </div>
          );
        })}
    </div>
  );
}
export default ProjectList;
