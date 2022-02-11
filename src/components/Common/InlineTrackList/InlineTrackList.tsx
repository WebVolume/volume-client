import React from "react";
import "./InlineTrackList.scss";
import { InlineTrack } from "./InlineTrack";

const InlineTrackList = () => {
  return (
    <div className="likes-track-list">
      <InlineTrack />
      <InlineTrack />
      <InlineTrack />
      <InlineTrack />
      <InlineTrack />
      <InlineTrack />
    </div>
  );
};

export default InlineTrackList;
