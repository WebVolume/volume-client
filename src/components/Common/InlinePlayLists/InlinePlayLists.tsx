import React from "react";
import { InlinePlayList } from "./InlinePlayLIst";
import "./InlinePlayLists.scss";
const InlinePlayLists = () => {
  return (
    <div className="inline-play-lists">
      <InlinePlayList />
      <InlinePlayList />
      <InlinePlayList />
      <InlinePlayList />
      <InlinePlayList />
    </div>
  );
};

export default InlinePlayLists;
