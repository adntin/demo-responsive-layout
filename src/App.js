import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import "./injectGlobal";
// import Layout from "./components/Layout";
// import Panel from "./components/Layout/Panel";

import Home from "./components/Home";
// import Conversation from "./components/Conversation";
// import Phone from "./components/Phone";
// 

class App extends Component {
  render() {
    return (
      <Home />
      // <Layout direction="column">
      //   <Panel defaultValue="56px" style={{ backgroundColor: "purple" }}>
      //     Top (fixed)
      //   </Panel>
      //   <Panel>
      //     <Layout>
      //       <Panel defaultValue="72px" style={{ backgroundColor: "red" }}>
      //         Nav (fixed)
      //       </Panel>
      //       <Panel>
      //         <Conversation />
      //       </Panel>
      //     </Layout>
      //   </Panel>
      // </Layout>
    );
  }
}

export default App;
