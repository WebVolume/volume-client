import React from "react";
import "./MiniPlayList.scss";
import testImg from "@images/background.png";
import emptyHeartIcon from "@ico/empty-heart.png";
const MiniPlayList = () => {
  return (
    <div className="mini-play-list">
      <a href="">
        <img src={testImg} alt="trackImg" className="mini-track__img" />
      </a>
      <div className="mini-play-list-info">
        <p className="mini-play-list-info__fix">Lora</p>
        <a href="" className="mini-play-list-info__title">
          심신안정과는 거리가 먼 노래
        </a>
        <div className="mini-play-list-info__icon-wrapper">
          <button type="button" className="mini-play-list-info__heart-btn">
            <img
              src={emptyHeartIcon}
              alt="emptyHeartIcon"
              className="mini-play-list-info__icon"
            />
          </button>
          <p className="mini-play-list-info__likes-count">102</p>
        </div>
      </div>
    </div>
  );
};

export default MiniPlayList;
