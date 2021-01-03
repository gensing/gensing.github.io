import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

export default function MarkDownPage(props: { list: any }) {
  const list = props.list;
  return (
    <Wrapper>
      <Ul>
        {list.map(
          (i: {
            name: string | number | null | undefined;
            title: React.ReactNode;
          }) => (
            <li key={i.name}>
              <Box>
                <Link to={`/${i.name}`}>{i.title}</Link>
              </Box>
            </li>
          ),
        )}
      </Ul>
    </Wrapper>
  );
}
