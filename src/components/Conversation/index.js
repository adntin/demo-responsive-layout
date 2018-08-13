import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Layout from "../Layout";
import Panel from "../Layout/Panel";

class Conversation extends Component {
  constructor() {
    super();
    this.leftRef = React.createRef();
    this.mainRef = React.createRef();
    this.rightRef = React.createRef();
    this.state = {
      leftRail: {
        defaultValue: "268px",
        minValue: "180px",
        maxValue: "360px"
      },
      main: {
        minValue: "401px",
        maxValue: "1504px"
      },
      rightRail: {
        defaultValue: "268px",
        minValue: "180px",
        maxValue: "360px"
      }
    };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    // const w = window;
    // const d = document;
    // const de = d.documentElement;
    // const body = d.getElementsByTagName("body")[0];
    // const width = w.innerWidth || de.clientWidth || body.clientWidth;
    // const height = w.innerHeight || de.clientHeight || body.clientHeight;
    // const windowHeight = window.innerHeight;

    const main = ReactDOM.findDOMNode(this.mainRef.current);
    const right = ReactDOM.findDOMNode(this.rightRef.current);
    const left = ReactDOM.findDOMNode(this.leftRef.current);

    const windowWidth = window.innerWidth;
    const leftWidth = left.offsetWidth;
    const mainWidth = main.offsetWidth;
    const rightWidth = right.offsetWidth;

    console.log([windowWidth, leftWidth, mainWidth, rightWidth]);

    if (main.offsetWidth <= 400) {
      // if (rightWidth > 180) {
      //   right.style.flexBasis = windowWidth - 72 - leftWidth - 400;
      // }

      // if (windowWidth > 72 + 180 + 400 + 180) {

      //   right.style.display = 'none';
      // }
      // else if (windowWidth > 72 + 180 + 400) {

      //   left.style.display = 'none';
      // }
    }

    // if (windowWidth <= 72 + 180 + 400) {
    //   left.style.display = 'none';
    // } else if (windowWidth <= 72 + 180 + 400 + 180) {
    //   right.style.display = 'none';
    // }

  }

  render() {
    return (
      <Layout>
        <Panel
          resizable="right"
          defaultValue="268px"
          minValue="180px"
          maxValue="360px"
          style={{ backgroundColor: "green" }}
          ref={this.leftRef}
        >
          LeftRail
        </Panel>
        <Panel
          minValue="401px"
          maxValue="1504px"
          style={{ backgroundColor: "blue" }}
          ref={this.mainRef}
        >
          Content
        </Panel>
        <Panel
          resizable="left"
          defaultValue="268px"
          minValue="180px"
          maxValue="360px"
          style={{ backgroundColor: "yellow" }}
          ref={this.rightRef}
        >
          RightRail
        </Panel>
      </Layout>
    );
  }
}

export default Conversation;
