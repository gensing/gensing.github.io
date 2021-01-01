import React from "react";
import { fetchMd } from "../posts/importUtil";

export default () => {
  const [source, setSource] = React.useState("");
  const [state, setState] = React.useState("init");

  const fetchMarkDown = React.useCallback((url: string) => {
    fetchMd(url)
      .then((text) => setSource(text))
      .catch(() => setState("fail"));
  }, []);

  return { state, source, fetchMarkDown };
};
