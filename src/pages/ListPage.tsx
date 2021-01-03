import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import List from "../components/templates/organisms/List";
import { fetchMdList } from "../posts/importUtil";

const Ul = styled.ul`
  list-style-type: none;
`;

const Box = styled.div`
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
  border: 1px solid #e1e4e8;
`;

const Wrapper = styled.div`
  width: 990px;
  margin: 30px auto;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`;

export default function MarkDownPage() {
  return <List list={fetchMdList(0, 10)} />;
}
