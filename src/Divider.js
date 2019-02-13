import React from "react";
import "./Divider.css";

function Divider() {
  return React.createElement(
    "div",
    { className: "Divider" },
    React.createElement("hr")
  );
}

export default Divider;
