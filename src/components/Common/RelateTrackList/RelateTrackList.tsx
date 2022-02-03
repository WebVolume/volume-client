import React from "react";
import { MiniTrack } from "@components/Common";
import "./RelateTrackList.scss";
const RelateTrackList = () => {
  return (
    <div className="relate-track-list">
      <div className="relate-track-list__header">
        <div className="relate-track-list__title">관련있는 트랙</div>
        <button className="relate-track-list__detail-btn">더보기</button>
      </div>
      <MiniTrack />
      <MiniTrack />
      <MiniTrack />
    </div>
  );
};

export default RelateTrackList;
