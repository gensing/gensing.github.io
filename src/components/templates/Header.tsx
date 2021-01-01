import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 45px;
  border-bottom: 1px solid black;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Gensing Github Blog</h1>
    </StyledHeader>
  );
}
