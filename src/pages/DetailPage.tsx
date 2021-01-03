import React from "react";
import { useHistory, useParams } from "react-router-dom";
import fm from "front-matter";
import useMarkDown from "../hooks/useMarkDown";
import Detail from "../components/templates/organisms/Detail";

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

  return <Detail source={fm(source).body} />;
}
