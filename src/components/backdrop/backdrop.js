import React from "react";
import "./backdrop.scss";

const backdrop = props => {
  return <div className="backdrop" onClick={props.open}></div>;
};

export default backdrop;
