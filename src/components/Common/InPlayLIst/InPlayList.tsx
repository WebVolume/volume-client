import React from "react";
import "./InPlayList.scss";
import MiniPlayList from "@components/Common/MiniPlayList";
const InPlayList = () => {
  return (
    <div className="in-play-list">
      <div className="in-play-list__header">
        <div className="in-play-list__title">이 곡이 있는 플레이 리스트</div>
        <button className="in-play-list__detail-btn">더보기</button>
      </div>
      <MiniPlayList />
      <MiniPlayList />
      <MiniPlayList />
    </div>
  );
};

export default InPlayList;
