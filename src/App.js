import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import "./App.css";

function App() {
  return (
    <Fragment>
      <nav>
        <Link to="/">Kevkidev</Link>
      </nav>
      <h1>Ca marche :)</h1>
    </Fragment>
  );
}

export default App;
