import React from "react";
import InlinePlayList from "./InlinePlayLIst";
import "./InlinePlayLists.scss";
import { v4 as uuidv4 } from "uuid";

const InlinePlayLists = () => {
  return (
    <ul className="inline-play-lists">
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <li key={uuidv4()}>
            <InlinePlayList />
          </li>
        );
      })}
    </ul>
  );
};

export default InlinePlayLists;
