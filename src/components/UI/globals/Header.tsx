import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 45px;
  border-bottom: 1px solid #e1e4e8;
  background-color: black;
  color: white;
`;

const ColorLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default function Header(props: { style?: React.CSSProperties }) {
  return (
    <StyledHeader {...props}>
      <h1>
        <ColorLink to="/">Gensing Github Blog</ColorLink>
      </h1>
    </StyledHeader>
  );
}
