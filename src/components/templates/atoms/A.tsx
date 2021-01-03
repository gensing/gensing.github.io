import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  background-color: #87ceeb;
  padding: 10px 30px;
  margin: 2px;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export default Button;
