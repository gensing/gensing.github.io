import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(Link)`
  display: inline-block;

  background-color: #5cb85c;
  padding: 6px 20px;
  margin: 1em;
  border: 1px solid palevioletred;
  border-radius: 4px;

  color: white;
  font-size: 1em;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;

  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #449d44;
  }
`;

export default LinkButton;
