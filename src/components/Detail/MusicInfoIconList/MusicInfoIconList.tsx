import React from "react";
import "./MusicInfoIconList.scss";
import emptyHeartIcon from "@ico/heart.svg";
import addPlayListIcon from "@ico/add-playlist.svg";
import addRepostIcon from "@ico/add-repost.svg";
import etcIcon from "@ico/etc.svg";
import fullHeartIcon from "@ico/heart_fill.svg";
import fullPlayIcon from "@ico/play-fill.svg";
import repeatIcon from "@ico/repeat.svg";

const MusicInfoIconList = () => {
  return (
    <div className="music-info-icon-container flex align-center justify-space-between">
      <div className="left-container">
        <ul className="flex">
          <li className="left-container__icon flex align-center justify-center">
            <img
              className="left-container__icon-img"
              src={emptyHeartIcon}
              alt="emptyHeartIcon"
            />
          </li>
          <li className="left-container__icon flex align-center justify-center">
            <img
              className="left-container__icon-img"
              src={addPlayListIcon}
              alt="addPlayListIcon"
            />
          </li>
          <li className="left-container__icon flex align-center justify-center">
            <img
              className="left-container__icon-img"
              src={addRepostIcon}
              alt="plusIcon"
            />
          </li>
          <li className="left-container__icon flex align-center justify-center">
            <img
              className="left-container__icon-img"
              src={etcIcon}
              alt="etcIcon"
            />
          </li>
        </ul>
      </div>
      <div className="right-container">
        <ul className="flex">
          <li className="right-container__icon flex align-center">
            <img
              className="right-container__icon-img"
              src={fullHeartIcon}
              alt="fullHeartIcon"
            />
            <p>50</p>
          </li>
          <li className="right-container__icon flex align-center">
            <img
              className="right-container__icon-img"
              src={fullPlayIcon}
              alt="fullPlayIcon"
            />
            <p>50</p>
          </li>
          <li className="right-container__icon flex align-center">
            <img
              className="right-container__icon-img"
              src={repeatIcon}
              alt="repeatIcon"
            />
            <p>50</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MusicInfoIconList;
