import React from "react";
import DummyImage from "@images/dummys/dummy-album-art.png";
import PlayGreyImg from "@ico/play-gray.svg";
import "./VolumerPlaylist.scss";

function VolumerPlaylist() {
  return (
    <ul className="volumer-play-list">
      {[1, 2].map(() => (
        <li className="volumer-play-list-item">
          <div className="volumer-play-list-item--container flex align-center">
            <img className="album-art" src={DummyImage} alt="앨범 아트" />
            <span className="f-one fs-12 mont-alt">Dummy Music Title</span>
            <img className="play-btn" src={PlayGreyImg} alt="재생 버튼" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default VolumerPlaylist;
