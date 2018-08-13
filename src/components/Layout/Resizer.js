import React, { Component } from "react";

const Resizer = ({ resizable, onMouseDown }) => {
  let style = {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 9999,
    padding: "5px"
  };
  switch (resizable) {
    case "left":
      style = {
        ...style,
        cursor: "col-resize",
        right: "100%",
        marginLeft: "-5px"
      };
      break;
    case "right":
      style = {
        ...style,
        cursor: "col-resize",
        left: "100%",
        marginLeft: "-5px"
      };
      break;
    case "top":
      style = {
        ...style,
        cursor: "row-resize",
        bottom: "100%",
        marginTop: "-5px"
      };
      break;
    case "bottom":
      style = {
        ...style,
        cursor: "row-resize",
        top: "100%",
        marginTop: "-5px"
      };
      break;
    default:
      return null;
  }
  return <div style={style} onMouseDown={onMouseDown} />;
};

export default Resizer;
