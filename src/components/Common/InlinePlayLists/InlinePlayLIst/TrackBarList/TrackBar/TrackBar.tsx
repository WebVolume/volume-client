import React from "react";
import "./TrackBar.scss";

import playBtn from "@ico/play.png";

const TrackBar = () => {
  return (
    <li className="track-bar flex align-center">
      <p className="track-bar__singer fs-18">Losa-</p>
      <p className="track-bar__title fs-18">12:45(Stripped)</p>
      <button className="track-bar__play-btn flex justify-center align-center">
        <img src={playBtn} alt="재생버튼" className="track-bar__play-btn-img" />
      </button>
      <p className="track-bar__listen-count fs-14">208k</p>
    </li>
  );
};

export default TrackBar;
