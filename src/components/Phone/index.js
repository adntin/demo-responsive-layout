import React from "react";
import Layout from "../Layout";
import Panel from "../Layout/Panel";

const Phone = () => {
  return (
    <Layout>
      <Panel style={{ backgroundColor: "blue" }}>Content</Panel>
      <Panel
        resizable="left"
        minValue="180px"
        maxValue="360px"
        defaultValue="268px"
        style={{ backgroundColor: "yellow" }}
      >
        RightRail
      </Panel>
    </Layout>
  );
};

export default Phone;
