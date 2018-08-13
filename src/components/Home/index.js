import React from "react";
// import Layout from "../Layout";
// import Panel from "../Layout/Panel";

import Wrapper from './Wrapper';
import Topbar from './Topbar';
import Bottom from './Bottom';
import LeftNav from './LeftNav';
import Main from './Main';
import Messages from '../Messages';

const Home = () => {
  return (
    // <Layout>
    //   <Panel style={{ backgroundColor: "blue" }}>Welcome Jupiter!</Panel>
    // </Layout>
    <Wrapper>
      <Topbar>
        topbar
        </Topbar>
      <Bottom>
        <LeftNav>
          left nav
          </LeftNav>
        <Main>
          <Messages />
        </Main>
      </Bottom>
    </Wrapper>
  );
};

export default Home;
