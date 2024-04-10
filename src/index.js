import React from "react";
import ReactDOM from "react-dom";

const name = "Ricardo";
const surname = "Carvalho";
const number = 46;
ReactDOM.render(
  <div>
    <h1>Hello {`${name} ${surname} `}!</h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
