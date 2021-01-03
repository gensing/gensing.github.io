import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Wrapper from "../atoms/Wrapper";
import LinkButton from "../atoms/LinkButton";

export default function MarkDownPage(props: { source: string }) {
  return (
    <Wrapper>
      <MarkdownPreview source={props.source} />
      <LinkButton to={`/`}>list</LinkButton>
    </Wrapper>
  );
}
