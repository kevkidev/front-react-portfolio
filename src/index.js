// TODO passer utiliser des const pour le path des routes

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as routes from "./common/routes";

// Lazy imports
const App = lazy(() => import("./app/App"));
const NotFoundPage = lazy(() => import("./app/NotFoundPage"));
const ProjectListPage = lazy(() => import("./app/ProjectListPage"));
const Login = lazy(() => import("./app/Login"));
const Chat = lazy(() => import("./chat/Chat"));
const Chrono = lazy(() => import("./time-interval/Chrono"));
const Calculator = lazy(() => import("./calculator/Calculator"));
const DrumMachine = lazy(() => import("./drum-machine/DrumMachine"));
const GameBlocks = lazy(() => import("./game-blocks/GameBlocks"));
const MarkdownEditor = lazy(() => import("./markdown-editor/MarkdownEditor"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route exact path={routes.PATH_ROOT} element={<App />} />
          <Route path={routes.PATH_PROJECTS} element={<ProjectListPage />} />
          <Route
            path={routes.PATH_PROJECTS_TIME_INTERVAL}
            element={<Chrono />}
          />
          <Route
            path={routes.PATH_PROJECTS_CALCULATOR}
            element={<Calculator />}
          />
          <Route
            path={routes.PATH_PROJECTS_DRUM_MACHINE}
            element={<DrumMachine />}
          />
          <Route path={routes.PATH_PROJECTS_CHAT} element={<Chat />} />
          <Route
            path={routes.PATH_PROJECTS_GAME_BLOCKS}
            element={<GameBlocks />}
          />
          <Route
            path={routes.PATH_MARKDOWN_EDITOR}
            element={<MarkdownEditor />}
          />
          <Route path="/login/:login" element={<Login />} />
          <Route path="/*/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
