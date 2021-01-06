import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin-top: 30px;
`;

const Li = styled.div`
  border: 1px solid #e1e4e8;
  padding: 1em 1rem;
`;

export default function MarkDownPage(props: {
  list: { name: string; title: string }[];
}) {
  const list = props.list;
  return (
    <Ul>
      {list.map((i) => (
        <Li key={i.name}>
          <Link to={`/${i.name}`}>{i.title}</Link>
        </Li>
      ))}
    </Ul>
  );
}
