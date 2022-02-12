import React from "react";
import "./InlineTrackList.scss";
import InlineTrack from "./InlineTrack";

const InlineTrackList = () => {
  return (
    <ul className="likes-track-list">
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <li>
            <InlineTrack />
          </li>
        );
      })}
    </ul>
  );
};

export default InlineTrackList;
