import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Login from "./Login";
import Chat from "./chat/Chat";
import Chrono from "./time-interval/Chrono";
import Calculator from "./calculator/Calculator";
import DrumMachine from "./drum-machine/DrumMachine";
import ProjectList from "./ProjectList";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/projects/time-interval" element={<Chrono />} />
        <Route path="/projects/calculator" element={<Calculator />} />
        <Route path="/projects/drum-machine" element={<DrumMachine />} />
        <Route path="/projects/chat/:pseudo" element={<Chat />} />
        <Route path="/projects" element={<ProjectList limit={0} />} />
        <Route path="/:login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
