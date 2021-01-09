import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'
import Main from "./components/products/Main";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  rootElement
);
