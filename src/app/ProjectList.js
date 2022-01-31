import "./ProjectList.scss";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { PATH_MARKDOWN_EDITOR } from "../common/routes";

const projects = [
  {
    route: "/projects/chat",
    title: "React Chat",
    imageSrc: "1e2xAiQ8sKCTXESOSljFzlkuzXCNNSO3I",
    display: false,
    description: "",
  },
  {
    route: "/projects",
    title: "React Social Network",
    imageSrc: "",
    display: true,
    description: "(IN PROGRESS)",
  },
  {
    route: "/projects/time-interval",
    title: "React Time interval",
    imageSrc: "1BRg-N_JiohYiIGBbtRe49iRHOGyURBnw",
    display: true,
    description:
      "Set your work time and your break time and loop it. \nKeywords : audio, interval, SASS, JSX, HTML5, Flexbox",
  },
  {
    route: "/projects/calculator",
    title: "React Calculator",
    imageSrc: "1mJnbMyqob5qZBaTTaSo7610fQoogI6rv",
    display: true,
    description:
      "Perform simple calculation and show the last operation and reuse it. \nKeywords : regex, state, redux, context, SASS, JSX, HTML5, CSS GRID",
  },
  {
    route: PATH_MARKDOWN_EDITOR,
    title: "React Markdown Editor",
    imageSrc: "1cXgz4rGSPyS3nUixfO_gh5h6d5UxQivS",
    external: false,
    display: true,
    description:
      "Write HTML using markdown conversion. \nKeywords : marked.js, DOMPurify, Responsive WEB Design, media query, flexbox",
  },
  {
    route: "/projects/drum-machine",
    title: "React Drum Machine",
    imageSrc: "1e2xAiQ8sKCTXESOSljFzlkuzXCNNSO3I",
    display: true,
    description:
      "Create music using the pads. \nKeywords : audio, JSX, CSS Grid, SASS",
  },
  {
    route: process.env.REACT_APP_URL_CODEPEN_QUOTE_MACHINE,
    title: "React Random Quote Machine",
    imageSrc: "1GqcTVVHfTElOm0MVvDt2srZ-36G_KdDR",
    external: true,
    display: true,
    description: "Keywords : react, CSS, SASS, JSX",
  },
  {
    route: process.env.REACT_APP_URL_CODEPEN_SURVEY_FORM,
    title: "Responsive Survey Form",
    imageSrc: "1ryYnR9OioELvxoCqmEjeHNQit4OqCH8z",
    external: true,
    display: true,
    description: "Keywords : HTML, form, input, CSS, media query",
  },
  {
    route: process.env.REACT_APP_URL_CODEPEN_DOC,
    title: "Responsive Technical doc template",
    imageSrc: "1nDvI-Fcu89sdPEFx1mbjlS63J0duKFoj",
    external: true,
    display: true,
    description: "Keywords : HMTL, CSS, media query",
  },
  {
    route: process.env.REACT_APP_URL_CODEPEN_LANDING,
    title: "Responsive Product Landing Page",
    imageSrc: "1SXyXydIvTG4OIM8lJlX-Xj3gizGLB5KZ",
    external: true,
    display: true,
    description:
      "Product Landing Page fully SEO optimized. \nKeywords : HTML, CSS, SEO, media query",
  },
  {
    route: process.env.REACT_APP_URL_CODEPEN_TRIBUTE,
    title: "Responsive Tribute",
    imageSrc: "1V-fA6ML6GkuHDSuEf31uv-vPhWx4n1wq",
    external: true,
    display: true,
    description: "Keywords : HTML, CSS, media query, flexbox",
  },
];

function ProjectList({ limit }) {
  let count = 0;
  if (limit > 0) {
    count = limit;
  } else {
    count = projects.length;
  }

  const TileContent = ({ e }) => (
    <Fragment>
      <img
        src={process.env.REACT_APP_SERVER_PREFIX + e.imageSrc}
        alt={e.title + " image"}
      />
      <p className="title">{e.title}</p>
      <p className="description">{e.description}</p>
    </Fragment>
  );

  return (
    <div className="app-projects-list">
      {projects.map((e, i) => {
        if (count > 0) {
          count--;
          return (
            e.display && (
              <div key={`project-${i}`} className="app-div-project-tile">
                {e.external && (
                  <a
                    className="project-item"
                    href={e.route}
                    target="__blank"
                    onClick={() =>
                      alert(
                        'You will redirect to an external web site.\nYou should be able to see the source code by clicking on the top right button "View in Editor".'
                      )
                    }
                  >
                    <TileContent e={e} />
                  </a>
                )}
                {!e.external && (
                  <Link className="project-item" to={e.route}>
                    <TileContent e={e} />
                  </Link>
                )}
              </div>
            )
          );
        }
        return <Fragment key={`project-${i}`}></Fragment>;
      })}
    </div>
  );
}
export default ProjectList;
