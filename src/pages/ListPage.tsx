import React from "react";
import List from "../components/UI/contents/List";
import { fetchMdList } from "../posts/importUtil";

export default function MarkDownPage() {
  return <List list={fetchMdList(0, 10)} />;
}
