import React, { Component } from "react";
import styled, { css } from "styled-components";

const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
`;

export default Layout;
