import React from "react";
import "./MusicSpinner.scss";
import testImg from "@images/background.png";
import playBtnImg from "@ico/play-fill-black.svg";
const MusicSpinner = () => {
  return (
    <div className="music-spinner flex justify-center align-center">
      <div className="music-spinner__disk"></div>
      <img src={testImg} alt="albumImg" className="music-spinner__album-img" />
      <div className="music-spinner__play-btn flex justify-center align-center">
        <img
          src={playBtnImg}
          alt="playBtnImg"
          className="music-spinner__play-btn-img"
        />
      </div>
    </div>
  );
};

export default MusicSpinner;
