import React from "react";
import InlinePlayList from "./InlinePlayLIst";
import "./InlinePlayLists.scss";
const InlinePlayLists = () => {
  return (
    <ul className="inline-play-lists">
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <li>
            <InlinePlayList />
          </li>
        );
      })}
    </ul>
  );
};

export default InlinePlayLists;
