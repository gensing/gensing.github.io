import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 45px;
  margin: 0 auto;
  border-top: 1px solid #e1e4e8;
  background-color: black;
  color: white;
`;

export default function Footer() {
  return <StyledFooter>footer</StyledFooter>;
}
