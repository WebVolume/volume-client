import React from "react";
import "./MiniTrack.scss";
import testImg from "@images/background.png";
import emptyPlayIcon from "@ico/play.svg";
import emptyHeartIcon from "@ico/heart.svg";
import fullPlayIcon from "@ico/play-fill.svg";

const MiniTrack = () => {
  return (
    <div className="mini-track flex align-center">
      <a href="">
        <img src={testImg} alt="trackImg" className="mini-track__img" />
      </a>
      <div className="mini-track-info flex column justify-space-between f-one">
        <p className="mini-track-info__singer fs-14 ellipsis">Lora</p>
        <a href="" className="mini-track-info__title fs-16 ellipsis">
          BTS 힙한 팝송 노래
        </a>
        <ul className="mini-track-info__icon-container flex">
          <li className="mini-track-info__icon-item flex align-center">
            <button
              type="button"
              className="mini-track-info__icon-btn flex align-center"
            >
              <img
                src={emptyHeartIcon}
                alt="emptyHeartIcon"
                title="좋아요"
                className="mini-track-info__icon"
              />
            </button>
            <p className="mini-track-info__likes-count fs-14">102</p>
          </li>
          <li className="mini-track-info__icon-item flex align-center">
            <button
              type="button"
              className="mini-track-info__icon-btn flex align-center"
            >
              <img
                src={emptyPlayIcon}
                alt="emptyPlayIcon"
                title="재생횟수"
                className="mini-track-info__icon"
              />
            </button>
            <p className="mini-track-info__play-count fs-14">102</p>
          </li>
        </ul>
      </div>
      <button className="mini-track__play-btn flex align-center justify-center">
        <img
          src={fullPlayIcon}
          alt="fullPlayIcon"
          className="mini-track__play-icon"
        />
      </button>
    </div>
  );
};

export default MiniTrack;
