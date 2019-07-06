import React from "react";
import "./style.css";

function Wrap(props) {
  return <div className="wrapper">{props.children}</div>;
};

export default Wrap;