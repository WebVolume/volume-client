import React from "react";
import testImg from "@images/background.png";
import addFolerIcon from "@ico/add-folder.png";
import heartIcon from "@ico/heart.svg";
import plusIcon from "@ico/plus.svg";
import etcIcon from "@ico/etc.svg";
import playFillIcon from "@ico/play-fill.svg";
import "./InlineTrack.scss";

const InlineTrack = () => {
  return (
    <div className="likes-track flex mont-alt">
      <img src={testImg} alt="앨범커버" className="likes-track__album-img" />
      <div className="likes-track__info">
        <div className="likes-track-header flex align-center">
          <p className="likes-track-header__uploader fs-18">Upload : Losa</p>
          <ul className="likes-track-header__icons-container flex row align-center">
            <li className="likes-track-header__icon">
              <a href="" className="likes-track-header__icon-btn">
                <img
                  src={heartIcon}
                  className="likes-track-header__icon-btn-img"
                  alt="하트버튼"
                />
              </a>
            </li>
            <li className="likes-track-header__icon  desktopTablet">
              <a href="" className="likes-track-header__icon-btn">
                <img
                  src={addFolerIcon}
                  className="likes-track-header__icon-btn-img"
                  alt="폴더버튼"
                />
              </a>
            </li>
            <li className="likes-track-header__icon  desktopTablet">
              <a href="" className="likes-track-header__icon-btn">
                <img
                  src={plusIcon}
                  className="likes-track-header__icon-btn-img"
                  alt="추가버튼"
                />
              </a>
            </li>
            <li className="likes-track-header__icon">
              <a href="" className="likes-track-header__icon-btn">
                <img
                  src={etcIcon}
                  className="likes-track-header__icon-btn-img"
                  alt="그외버튼"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="likes-track-title">
          <p className="likes-track-title__name fs-24 w-600 inline-block">
            12:45(Stripped)
          </p>
          <p className="likes-track-title__singer fs-20 w-600 inline-block">
            ethan
          </p>
        </div>
        <div className="likes-track-main flex row align-center">
          <button className="likes-track-main__play-btn flex justify-center align-center">
            <img
              className="likes-track-main__play-btn-img"
              src={playFillIcon}
              alt="재생버튼"
            />
          </button>
          <p className="likes-track-main__lyrics fs-16  desktopTablet">
            {`It's 12:45 on a Tuesday.
and I don't really care what you say
I'm just getting off my face tonight.`}
          </p>
          <p className="likes-track-main__date fs-14">7일 전</p>
        </div>
      </div>
    </div>
  );
};

export default InlineTrack;
