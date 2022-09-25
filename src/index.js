import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App tab="home" />);

// ReactDOM.render(<App />, document.getElementById("root"));
//react 18 uses create root instead of react-dom render
