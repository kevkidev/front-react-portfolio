import "./ProjectList.scss";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { PATH_MARKDOWN_EDITOR } from "../common/routes";

const projects = [
  {
    route: "/projects/chat",
    title: "React Chat",
    imageSrc: "1e2xAiQ8sKCTXESOSljFzlkuzXCNNSO3I",
    display: true,
    description: "",
  },
  {
    route: "/projects/time-interval",
    title: "React Time interval",
    imageSrc: "1BRg-N_JiohYiIGBbtRe49iRHOGyURBnw",
    display: true,
    description: "...",
  },
  {
    route: "/projects/calculator",
    title: "React Calculator",
    imageSrc: "1mJnbMyqob5qZBaTTaSo7610fQoogI6rv",
    display: true,
    description:
      "Effectuer des calculs de base. Afficher le calcul en courant. Afficher l'historique du dernier résultat. Mots clés : regex, state, redux, context",
  },
  {
    route: PATH_MARKDOWN_EDITOR,
    title: "React Markdown Editor",
    imageSrc: "1cXgz4rGSPyS3nUixfO_gh5h6d5UxQivS",
    external: false,
    display: true,
    description: "...",
  },
  {
    route: "/projects/drum-machine",
    title: "React Drum Machine",
    imageSrc: "1e2xAiQ8sKCTXESOSljFzlkuzXCNNSO3I",
    display: true,
    description: "...",
  },
  {
    route: process.env.REACT_APP_URL_CODEPEN_QUOTE_MACHINE,
    title: "React Random Quote Machine",
    imageSrc: "1GqcTVVHfTElOm0MVvDt2srZ-36G_KdDR",
    external: true,
    display: true,
    description: " ",
  },
  {
    route: process.env.REACT_APP_URL_CODEPEN_SURVEY_FORM,
    title: "Responsive Survey Form",
    imageSrc: "1ryYnR9OioELvxoCqmEjeHNQit4OqCH8z",
    external: true,
    display: true,
    description: "",
  },
  {
    route: process.env.REACT_APP_URL_CODEPEN_DOC,
    title: "Responsive Technical doc template",
    imageSrc: "1nDvI-Fcu89sdPEFx1mbjlS63J0duKFoj",
    external: true,
    display: true,
    description: "",
  },
  {
    route: process.env.REACT_APP_URL_CODEPEN_LANDING,
    title: "Responsive Product Landing Page",
    imageSrc: "1SXyXydIvTG4OIM8lJlX-Xj3gizGLB5KZ",
    external: true,
    display: true,
    description: "",
  },

  {
    route: process.env.REACT_APP_URL_CODEPEN_TRIBUTE,
    title: "Responsive Tribute",
    imageSrc: "1V-fA6ML6GkuHDSuEf31uv-vPhWx4n1wq",
    external: true,
    display: true,
    description: "...",
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
