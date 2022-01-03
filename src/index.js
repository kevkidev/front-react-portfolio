// TODO passer utiliser des const pour le path des routes

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH_MARKDOWN_EDITOR, PATH_ROOT } from "./common/routes";

// Lazy imports
const NotFoundPage = lazy(() => import("./NotFoundPage"));
const Login = lazy(() => import("./Login"));
const Chat = lazy(() => import("./chat/Chat"));
const Chrono = lazy(() => import("./time-interval/Chrono"));
const Calculator = lazy(() => import("./calculator/Calculator"));
const DrumMachine = lazy(() => import("./drum-machine/DrumMachine"));
const GameBlocks = lazy(() => import("./game-blocks/GameBlocks"));
const ProjectListPage = lazy(() => import("./ProjectListPage"));
const MarkdownEditor = lazy(() => import("./markdown-editor/MarkdownEditor"));
const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route exact path={PATH_ROOT} element={<App />} />
          <Route path="/projects/time-interval" element={<Chrono />} />
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route path="/projects/drum-machine" element={<DrumMachine />} />
          <Route path="/projects/chat" element={<Chat />} />
          <Route path="/projects/game-blocks" element={<GameBlocks />} />
          <Route path={PATH_MARKDOWN_EDITOR} element={<MarkdownEditor />} />
          <Route path="/projects" element={<ProjectListPage />} />
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
