import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import LinkButton from "../../templates/atoms/A";
import { Row } from "../../templates/atoms/Grid";
import { Wrapper } from "../../templates/atoms/Wrapper";

export default function MarkDownPage(props: { source: string }) {
  return (
    <div>
      <Wrapper>
        <MarkdownPreview source={props.source} />
      </Wrapper>
      <Row colAlign={"flex-end"} rowAlign={`center`}>
        <LinkButton to={`/`}>list</LinkButton>
      </Row>
    </div>
  );
}
