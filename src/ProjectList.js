import { Link } from "react-router-dom";

const projects = [
  {
    route: "/time-interval",
    title: "Time interval",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/calculator",
    title: "Calculator",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/chat",
    title: "Chat",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972316.png",
    display: true,
  },
  {
    route: "/drum-machine",
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

  console.log(count);

  return (
    <div className="app-projects-list">
      {projects.map((e) => {
        if (count > 0) {
          count--;
          return (
            e.display && (
              <div className="app-div-project-tile">
                <Link to={e.route}>
                  <img src={e.imageSrc} alt={e.title + " image"} />
                  <p>{e.title}</p>
                </Link>
              </div>
            )
          );
        }
      })}
    </div>
  );
}
export default ProjectList;
