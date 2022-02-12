import React from "react";
import "./InPlayList.scss";
import MiniPlayList from "@components/Common/MiniPlayList";
const InPlayList = () => {
  return (
    <div className="in-play-list mont">
      <div className="in-play-list__header flex align-center">
        <p className="in-play-list__title fs-18">이 곡이 있는 플레이 리스트</p>
        <a href="" className="in-play-list__detail-btn fs-14">
          더보기
        </a>
      </div>
      <ul className="mini-play-list-ul">
        {[1, 2, 3].map(list => {
          return (
            <li>
              <MiniPlayList />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InPlayList;
