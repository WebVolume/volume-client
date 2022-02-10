import React from "react";
import "./LikesTrackList.scss";
import { LikesTrack } from "./LikesTrack";

const LikesTrackList = () => {
  return (
    <div className="likes-track-list">
      <LikesTrack />
      <LikesTrack />
      <LikesTrack />
      <LikesTrack />
      <LikesTrack />
      <LikesTrack />
    </div>
  );
};

export default LikesTrackList;
