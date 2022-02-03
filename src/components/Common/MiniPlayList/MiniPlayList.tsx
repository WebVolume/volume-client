import React from "react";
import "./MiniPlayList.scss";
import testImg from "@images/background.png";
import emptyHeartIcon from "@ico/empty-heart.png";
const MiniPlayList = () => {
  return (
    <div className="mini-play-list">
      <img src={testImg} alt="trackImg" className="mini-track__img" />
      <div className="mini-play-list-info">
        <p className="mini-play-list-info__fix">Lora</p>
        <p className="mini-play-list-info__title">
          심신안정과는 거리가 먼 노래
        </p>
        <div className="mini-play-list-info__icon-wrapper">
          <img
            src={emptyHeartIcon}
            alt="emptyHeartIcon"
            className="mini-play-list-info__icon"
          />
          102
        </div>
      </div>
    </div>
  );
};

export default MiniPlayList;
