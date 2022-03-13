import React from "react";
import { MiniTrack } from "@components/Common";
import "./RelateTrackList.scss";
const RelateTrackList = () => {
  return (
    <div className="relate-track-list mont">
      <div className="relate-track-list-header flex align-center">
        <p className="relate-track-list-header__title fs-18">관련있는 트랙</p>
        <a
          href="#"
          className="relate-track-list-header__detail-btn fs-14 fc-white"
        >
          더보기
        </a>
      </div>
      <ul>
        {[1, 2, 3].map(list => {
          return (
            <li>
              <MiniTrack />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelateTrackList;
