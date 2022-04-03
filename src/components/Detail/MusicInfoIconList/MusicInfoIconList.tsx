import addPlayListIcon from "@ico/add-playlist.svg";
import addRepostIcon from "@ico/add-repost.svg";
import etcIcon from "@ico/etc.svg";
import emptyHeartIcon from "@ico/heart.svg";
import fullHeartIcon from "@ico/heart_fill.svg";
import fullPlayIcon from "@ico/play-fill.svg";
import repeatIcon from "@ico/repeat.svg";
import React, { useState } from "react";
import "./MusicInfoIconList.scss";

const MusicInfoIconList = () => {
  const [musicLike, setMusicLike] = useState(false);
  const handleMusicLike = () => {
    setMusicLike(() => !musicLike);
  };
  return (
    <div className="music-info-icon-container flex align-center justify-space-between">
      <div className="left-container">
        <ul className="flex">
          <button
            className="left-container__icon flex align-center justify-center"
            title={musicLike ? "좋아요 취소" : "좋아요"}
            onClick={handleMusicLike}
          >
            <img
              className="left-container__icon-img"
              src={musicLike ? fullHeartIcon : emptyHeartIcon}
              alt="하트 아이콘"
            />
          </button>
          <button
            className="left-container__icon flex align-center justify-center"
            title="플레이 리스트에 추가"
          >
            <img
              className="left-container__icon-img"
              src={addPlayListIcon}
              alt="플레이 리스트에 추가 아이콘"
            />
          </button>
          <button
            className="left-container__icon flex align-center justify-center"
            title="리포스트 하기"
          >
            <img
              className="left-container__icon-img"
              src={addRepostIcon}
              alt="리포스트 아이콘"
            />
          </button>
          <button
            className="left-container__icon flex align-center justify-center"
            title="추가기능"
          >
            <img
              className="left-container__icon-img"
              src={etcIcon}
              alt="추가기능 아이콘"
            />
          </button>
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
