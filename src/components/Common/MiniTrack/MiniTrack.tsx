import React from "react";
import "./MiniTrack.scss";
import testImg from "@images/background.png";
import emptyHeartIcon from "@ico/empty-heart.png";
import fullPlayIcon from "@ico/full-play.png";

const MiniTrack = () => {
  return (
    <div className="mini-track">
      <a href="">
        <img src={testImg} alt="trackImg" className="mini-track__img" />
      </a>

      <div className="mini-track-info">
        <p className="mini-track-info__fix">Lora</p>
        <a href="" className="mini-track-info__title">
          BTS 힙한 팝송 노래
        </a>
        <ul className="mini-track-info__icon-container">
          <li className="mini-track-info__icon-item">
            <img
              src={emptyHeartIcon}
              alt="emptyHeartIcon"
              className="mini-track-info__icon"
            />
            102
          </li>
          <li className="mini-track-info__icon-item">
            <button type="button" className="mini-track-info__heart-btn">
              <img
                src={emptyHeartIcon}
                alt="emptyHeartIcon"
                className="mini-track-info__icon"
              />
            </button>
            <p className="mini-track-info__likes-count">102</p>
          </li>
        </ul>
      </div>
      <button className="mini-track__play-btn">
        <img src={fullPlayIcon} alt="fullPlayIcon" />
      </button>
    </div>
  );
};

export default MiniTrack;
