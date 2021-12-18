import { Fragment } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    route: "/projects/time-interval",
    title: "Time interval",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/projects/calculator",
    title: "Calculator",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/projects/chat",
    title: "Chat",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/projects/drum-machine",
    title: "Drum Machine",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/",
    title: "[comming soon]",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/",
    title: "[comming soon]",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/",
    title: "[comming soon]",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/",
    title: "[comming soon]",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: false,
  },
];

function ProjectList({ limit }) {
  let count = 0;
  if (limit > 0) {
    count = limit;
  } else {
    count = projects.length;
  }

  return (
    <div className="app-projects-list">
      {projects.map((e, i) => {
        if (count > 0) {
          count--;
          return (
            e.display && (
              <div key={`project-${i}`} className="app-div-project-tile">
                <Link class="app-a" to={e.route}>
                  <img src={e.imageSrc} alt={e.title + " image"} />
                  <p>{e.title}</p>
                </Link>
              </div>
            )
          );
        }
        return <Fragment></Fragment>;
      })}
    </div>
  );
}
export default ProjectList;
