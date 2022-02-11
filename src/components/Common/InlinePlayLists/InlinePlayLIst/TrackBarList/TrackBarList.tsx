import React from "react";
import { TrackBar } from "./TrackBar";
import "./TrackBarList.scss";

const TrackBarList = () => {
  return (
    <div className="track-bar-list">
      <ul className="track-bar-container flex column">
        <TrackBar />
        <TrackBar />
        <TrackBar />
        <TrackBar />
        <li className="track-bar more-track-bar flex align-center justify-center">
          <p className="track-bar__more-track-bar fs-18">View 35 tracks</p>
        </li>
      </ul>
    </div>
  );
};

export default TrackBarList;
