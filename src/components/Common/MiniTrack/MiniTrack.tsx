import React from "react";
import "./MiniTrack.scss";
import testImg from "@images/background.png";
import emptyHeartIcon from "@ico/empty-heart.png";
import emptyPlayIcon from "@ico/play.png";
import fullPlayIcon from "@ico/full-play.png";
const MiniTrack = () => {
  return (
    <div className="mini-track">
      <img src={testImg} alt="trackImg" className="mini-track__img" />
      <div className="mini-track-info">
        <p className="mini-track-info__fix">Lora</p>
        <p className="mini-track-info__title">BTS 힙한 팝송 노래</p>
        <div className="mini-track-info__icon-container">
          <div className="mini-track-info__icon-content">
            <img
              src={emptyHeartIcon}
              alt="emptyHeartIcon"
              className="mini-track-info__icon"
            />
            102
          </div>
          <div className="mini-track-info__icon-content">
            <img
              src={emptyPlayIcon}
              alt="emptyPlayIcon"
              className="mini-track-info__icon"
            />
            102
          </div>
        </div>
      </div>
      <button className="mini-track__play-btn">
        <img src={fullPlayIcon} alt="fullPlayIcon" />
      </button>
    </div>
  );
};

export default MiniTrack;
