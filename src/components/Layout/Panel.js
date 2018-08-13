import React, { Component } from "react";
import Resizer from "./Resizer";
import { getOffsetLeft, getOffsetTop, pauseEvent } from "./utils";

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      currentNode: null, // dom, onMouseMove unknow the current drag element
      currentValue: 0 // 100px
    };
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseDown(e) {
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("mousemove", this.onMouseMove);
    if (!this.state.currentNode) {
      this.setState({ currentNode: e.target });
    }
  }

  onMouseUp(e) {
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("mousemove", this.onMouseMove);
    if (this.state.currentNode) {
      this.setState({ currentNode: null });
    }
  }

  onMouseMove(e) {
    const { currentNode } = this.state;
    const { minValue = 10, maxValue = 9999, resizable } = this.props;
    if (!currentNode) {
      return;
    }
    pauseEvent(e); // mouse move prevent select text
    const parentNode = currentNode.parentNode;
    let currentValue = 0;
    let offsetLeft = 0;
    let offsetTop = 0;
    switch (resizable) {
      case "left":
        offsetLeft = getOffsetLeft(parentNode);
        currentValue = parentNode.offsetWidth + (offsetLeft - e.clientX);
        break;
      case "right":
        offsetLeft = getOffsetLeft(parentNode);
        currentValue = e.clientX - offsetLeft;
        break;
      case "top":
        offsetTop = getOffsetTop(parentNode);
        currentValue = parentNode.offsetHeight + (offsetTop - e.clientY);
        break;
      case "bottom":
        offsetTop = getOffsetTop(parentNode);
        currentValue = e.clientY - offsetTop;
        break;
      default:
        throw new Error("resizable overflow");
    }
    if (
      currentValue > parseInt(minValue) &&
      currentValue < parseInt(maxValue)
    ) {
      this.setState({ currentValue: `${currentValue}px` });
    }
  }

  render() {
    const { currentValue } = this.state;
    let { resizable, defaultValue, style = {}, children } = this.props;

    style = { position: "relative", ...style }; // position relative for Resizer component
    if (defaultValue) {
      style.flexBasis = currentValue || defaultValue;
      style.flexShrink = 0;
    } else {
      style.flex = 1;
    }

    return (
      <div style={style}>
        {children}
        <Resizer resizable={resizable} onMouseDown={this.onMouseDown} />
      </div>
    );
  }
}

export default Panel;
