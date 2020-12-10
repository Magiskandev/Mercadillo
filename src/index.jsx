import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'



const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  rootElement
);
