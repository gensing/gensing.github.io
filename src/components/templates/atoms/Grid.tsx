import styled from "styled-components";

export const Grid = styled.div``;

export const Row = styled.div<{ colAlign?: string; rowAlign?: string }>`
  display: flex;
  align-items: ${(props) => (props.rowAlign ? props.rowAlign : "baseline")};
  justify-content: ${(props) =>
    props.colAlign ? props.colAlign : "flex-start"};
`;

export const Col = styled.div<{ size: number }>`
  flex: ${(props) => props.size};
`;
