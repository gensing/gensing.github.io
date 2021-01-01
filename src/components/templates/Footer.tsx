import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-row-start: 2;
  grid-row-end: 3;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 45px;
  border-top: 1px solid black;
`;

export default function Footer() {
  return <StyledFooter>footer</StyledFooter>;
}
