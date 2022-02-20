import React from "react";
import TrackBar from "./TrackBar";
import "./TrackBarList.scss";

const TrackBarList = () => {
  return (
    <ul className="track-bar-list flex column">
      {[1, 2, 3, 4].map(() => (
        <TrackBar />
      ))}
      <li className="more-track-bar flex align-center justify-center">
        <a href="#" className="more-track-bar__content fs-18">
          View 35 tracks
        </a>
      </li>
    </ul>
  );
};

export default TrackBarList;
