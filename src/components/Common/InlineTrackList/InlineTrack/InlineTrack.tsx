import React from "react";
import testImg from "@images/background.png";
import addPalyListIcon from "@ico/add-playlist.svg";
import heartIcon from "@ico/heart.svg";
import repostIcon from "@ico/repost.svg";
import etcIcon from "@ico/etc.svg";
import playFillIcon from "@ico/play-fill.svg";
import "./InlineTrack.scss";

const InlineTrack = () => {
  return (
    <div className="likes-track flex mont-alt">
      <img
        src={testImg}
        alt="앨범커버"
        title="이미지"
        className="likes-track__album-img"
      />
      <div className="likes-track__info flex f-one column">
        <div className="likes-track-header flex align-center justify-space-between">
          <p className="likes-track-header__uploader fs-18 ellipsis">
            Upload : Losa
          </p>
          <ul className="likes-track-header__icons-container flex row align-center">
            <li className="likes-track-header__icon">
              <a href="" className="likes-track-header__icon-btn">
                <img
                  src={heartIcon}
                  className="likes-track-header__icon-btn-img"
                  alt="하트버튼"
                  title="좋아요"
                />
              </a>
            </li>
            <li className="likes-track-header__icon  desktopTablet">
              <a href="" className="likes-track-header__icon-btn">
                <img
                  src={addPalyListIcon}
                  className="likes-track-header__icon-btn-img"
                  alt="폴더버튼"
                  title="플레이리스트에 추가"
                />
              </a>
            </li>
            <li className="likes-track-header__icon  desktopTablet">
              <a href="" className="likes-track-header__icon-btn">
                <img
                  src={repostIcon}
                  className="likes-track-header__icon-btn-img"
                  alt="추가버튼"
                  title="리포스트 하기"
                />
              </a>
            </li>
            <li className="likes-track-header__icon">
              <a href="" className="likes-track-header__icon-btn">
                <img
                  src={etcIcon}
                  className="likes-track-header__icon-btn-img"
                  alt="그외버튼"
                  title="삭제 / 신고"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="likes-track-title">
          <p className="likes-track-title__name fs-24 w-600 inline-block ellipsis">
            12:45(Stripped)
          </p>
          <p className="likes-track-title__singer fs-20 w-600 inline-block ellipsis">
            ethan
          </p>
        </div>
        <div className="likes-track-main flex f-one align-center justify-space-between">
          <button className="likes-track-main__play-btn flex justify-center align-center">
            <img
              className="likes-track-main__play-btn-img"
              src={playFillIcon}
              alt="재생버튼"
            />
          </button>
          <p className="likes-track-main__lyrics f-one fs-16  desktopTablet">
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
