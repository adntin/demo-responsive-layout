import React, { Component } from "react";

import { addResizeEvent, removeResizeEvent } from './optimizedResize';
import Wrapper from "./Wrapper";
import LeftRail from "./LeftRail";
import Thread from "./Thread";
import RightRail from "./RightRail";

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      middle: 0,
      left: 250, // current left panel width value
      right: 300,
      last_left: 250, // last left panel width value
      last_right: 300
    };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    // window.addEventListener("resize", this.onResize);
    addResizeEvent(this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.onResize);
    removeResizeEvent();
  }

  onResize() {
    let { left, middle, right, last_left, last_right } = this.state;
    const nav = 72; // todo 72 is dynamic value
    const max = 1820; // todo change to 1920
    const windowWidth = window.innerWidth;
    const body = windowWidth > max ? max : windowWidth;

    middle = body - nav - left - right;
    if (middle <= 400) {
      // hide right
      middle = 400;
      right = body - nav - left - middle;
      if (right < 180) {
        right = 0;
        middle = body - nav - left - right;
      }
      if (middle <= 400) {
        // hide left
        middle = 400;
        left = body - nav - middle - right;
        if (left < 180) {
          left = 0;
          middle = body - nav - left - right;
        }
        if (middle <= 400) {
          middle = 400;
        }
      }
    } else {
      // show left
      if (left === 0 && middle >= 400 + 180) {
        left = 180;
        middle = body - nav - left - right;
      }
      if (left >= 180) {
        if (left < last_left) {
          middle = 400;
          left = body - nav - middle - right;
        }
        // ensure left value too big, because setState is micro task
        if (left > last_left) {
          left = last_left;
          middle = body - nav - left - right;
        }
      }
      // show right
      if (right === 0 && middle >= 400 + 180) {
        right = 180;
        middle = body - nav - left - right;
      }
      if (right >= 180) {
        if (right < last_right) {
          middle = 400;
          right = body - nav - left - middle;
        }
        // ensure right value too big, because setState is micro task
        if (right > last_right) {
          right = last_right;
          middle = body - nav - left - right;
        }
      }
    }

    this.setState({ left, middle, right });
    // localStorage.setItem('conversation_left', left);
    // localStorage.setItem('conversation_middle', middle);
    // localStorage.setItem('conversation_right', right);
  }

  render() {
    const { left, middle, right } = this.state;
    return (
      <Wrapper>
        <LeftRail value={left}>left rail</LeftRail>
        <Thread value={middle}>conversation thread</Thread>
        <RightRail value={right}>right rail</RightRail>
      </Wrapper>
    );
  }
}

export default Messages;
