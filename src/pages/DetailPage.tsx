import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import fm from "front-matter";
import useMarkDown from "../hooks/useMarkDown";

export default function MarkDownPage() {
  let { id } = useParams<{ id: string }>();
  let history = useHistory();
  const { state, source, fetchMarkDown } = useMarkDown();

  React.useEffect(() => {
    if (state == "fail") history.push("/error");
  }, [state, history]);

  React.useEffect(() => {
    fetchMarkDown(id);
  }, [id, fetchMarkDown]);

  return (
    <>
      <MarkdownPreview source={fm(source).body} />
      <Link to={`/`}>list</Link>
    </>
  );
}
