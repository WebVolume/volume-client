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
      <div className="inline-play-list-info">
        <div className="inline-play-list-info__header flex align-center">
          <p className="inline-play-list-info__uploader fs-18 ellipsis">
            Upload : Losa
          </p>
          <ul className="inline-play-list-info__icons-container flex align-center">
            <li className="inline-play-list-info__icon-item">
              <a href="">
                <img
                  src={heartIcon}
                  alt="하트버튼"
                  title="좋아요"
                  className="inline-play-list-info__icon-img"
                />
              </a>
            </li>
            <li className="inline-play-list-info__icon-item desktopTablet">
              <a href="">
                <img
                  src={addPlaylistIcon}
                  alt="플레이리스트에추가버튼"
                  title="플레이리스트에 추가"
                  className="inline-play-list-info__icon-img"
                />
              </a>
            </li>
            <li className="inline-play-list-info__icon-item desktopTablet">
              <a href="">
                <img
                  src={addRepostIcon}
                  alt="리포스트버튼"
                  title="리포스트하기"
                  className="inline-play-list-info__icon-img"
                />
              </a>
            </li>
            <li className="inline-play-list-info__icon-item">
              <a href="">
                <img
                  src={etcIcon}
                  alt="그외버튼"
                  title="삭제 / 신고"
                  className="inline-play-list-info__icon-img"
                />
              </a>
            </li>
          </ul>
        </div>
        <p className="inline-play-list-info__name w-600 fs-24 ellipsis">
          플리제목
        </p>
        <TrackBarList />
      </div>
    </div>
  );
};

export default InlinePlayList;
