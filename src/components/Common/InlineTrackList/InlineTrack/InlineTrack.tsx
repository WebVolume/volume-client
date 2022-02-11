import React from "react";
import testImg from "@images/background.png";
import addFolerIcon from "@ico/add-folder.png";
import heartIcon from "@ico/heart.svg";
import plusIcon from "@ico/plus.svg";
import etcIcon from "@ico/etc.svg";
import playFillIcon from "@ico/play-fill.svg";
import "./InlineTrack.scss";

const LikesTrack = () => {
  return (
    <div className="likes-track flex mont-alt">
      <img src={testImg} alt="앨범커버" className="likes-track__album-img" />
      <div className="likes-track__info">
        <div className="likes-track__header flex align-center">
          <p className="likes-track__uploader">Upload : Losa</p>
          <ul className="likes-track__icons-container flex row align-center">
            <li className="likes-track__icon-item">
              <img src={heartIcon} alt="하트버튼" />
            </li>
            <li className="likes-track__icon-item">
              <img src={addFolerIcon} alt="폴더버튼" />
            </li>
            <li className="likes-track__icon-item">
              <img src={plusIcon} alt="추가버튼" />
            </li>
            <li className="likes-track__icon-item">
              <img src={etcIcon} alt="그외버튼" />
            </li>
          </ul>
        </div>
        <div className="likes-track-title">
          <p className="likes-track-title__name w-600 inline-block">
            12:45(Stripped)
          </p>
          <p className="likes-track-title__singer w-600 inline-block">ethan</p>
        </div>
        <div className="likes-track-main flex row align-center">
          <button className="likes-track-main__play-btn flex justify-center align-center">
            <img
              className="likes-track-main__play-btn-img"
              src={playFillIcon}
              alt="재생버튼"
            />
          </button>
          <p className="likes-track-main__lyrics">
            {`It's 12:45 on a Tuesday.
and I don't really care what you say
I'm just getting off my face tonight.`}
          </p>
          <p className="likes-track-main__date">7일 전</p>
        </div>
      </div>
    </div>
  );
};

export default LikesTrack;
