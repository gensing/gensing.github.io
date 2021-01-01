import React from "react";
import { Link } from "react-router-dom";
import { fetchMdList } from "../posts/importUtil";

export default function MarkDownPage() {
  const list = fetchMdList(0, 10);
  return (
    <>
      {list.map((i) => (
        <li key={i.name}>
          <Link to={`/${i.name}`}>{i.title}</Link>
        </li>
      ))}
    </>
  );
}
