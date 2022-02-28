import React from "react";
import "./MiniPlayList.scss";
import testImg from "@images/background.png";
import emptyHeartIcon from "@ico/heart.svg";

const MiniPlayList = () => {
  return (
    <div className="mini-play-list flex align-center">
      <a href="">
        <img src={testImg} alt="trackImg" className="mini-track__img" />
      </a>
      <div className="mini-play-list-info">
        <p className="mini-play-list-info__singer fs-14 ellipsis">Lora</p>
        <a href="" className="mini-play-list-info__title block fs-16 ellipsis">
          심신안정과는 거리가 먼 노래
        </a>
        <div className="mini-play-list-info__icon-wrapper flex align-center">
          <button
            type="button"
            className="mini-play-list-info__heart-btn flex align-center"
          >
            <img
              src={emptyHeartIcon}
              alt="emptyHeartIcon"
              className="mini-play-list-info__icon"
            />
          </button>
          <p className="mini-play-list-info__likes-count fs-14">102</p>
        </div>
      </div>
    </div>
  );
};

export default MiniPlayList;
