import React from "react";
import "./InlinePlayList.scss";
import testImg from "@images/background.png";
import TrackBarList from "./TrackBarList";
import heartIcon from "@ico/heart.svg";
import addPlaylistIcon from "@ico/add-playlist.svg";
import addRepostIcon from "@ico/add-repost.svg";
import etcIcon from "@ico/etc.svg";

const InlinePlayList = () => {
  return (
    <div className="inline-play-list flex  mont-alt">
      <img
        src={testImg}
        alt="앨범커버"
        className="inline-play-list__album-img"
      ></img>
      <div className="inline-play-list__info">
        <div className="inline-play-list__header flex align-center">
          <p className="inline-play-list__uploader fs-18">Upload : Losa</p>
          <ul className="inline-play-list__icons-container flex align-center">
            <li className="inline-play-list__icon-item">
              <img
                src={heartIcon}
                alt="하트버튼"
                className="inline-play-list__icon-img"
              />
            </li>
            <li className="inline-play-list__icon-item">
              <img
                src={addPlaylistIcon}
                alt="플레이리스트에추가버튼"
                className="inline-play-list__icon-img"
              />
            </li>
            <li className="inline-play-list__icon-item">
              <img
                src={addRepostIcon}
                alt="리포스트버튼"
                className="inline-play-list__icon-img"
              />
            </li>
            <li className="inline-play-list__icon-item">
              <img
                src={etcIcon}
                alt="그외버튼"
                className="inline-play-list__icon-img"
              />
            </li>
          </ul>
        </div>
        <p className="inline-play-list__name w-600 fs-24">플리제목</p>
        <TrackBarList />
      </div>
    </div>
  );
};

export default InlinePlayList;
