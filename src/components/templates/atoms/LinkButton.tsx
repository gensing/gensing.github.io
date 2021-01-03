import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(Link)`
  display: inline-block;

  background-color: #87ceeb;
  padding: 0.25em 1em;
  margin: 1em;
  border: 1px solid palevioletred;
  border-radius: 3px;

  color: black;
  font-size: 1em;
  text-align: center;

  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: blue;
    color: black;
  }
`;

export default LinkButton;
