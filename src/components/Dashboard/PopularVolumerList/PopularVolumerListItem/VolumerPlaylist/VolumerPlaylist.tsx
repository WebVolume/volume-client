import React from "react";
import DummyImage from "@images/dummys/dummy-album-art.png";
import PlayGreyImg from "@ico/play-gray.svg";
import "./VolumerPlaylist.scss";
import { v4 as uuidv4 } from "uuid";

function VolumerPlaylist() {
  return (
    <ul className="volumer-play-list">
      {[1, 2].map(() => (
        <li key={uuidv4()} className="volumer-play-list-item">
          <div className="volumer-play-list-item--container flex align-center">
            <img className="album-art" src={DummyImage} alt="앨범 아트" />
            <span className="f-one fs-12 mont-alt">Dummy Music Title</span>
            <a href="#" title="재생">
              <img className="play-btn" src={PlayGreyImg} alt="재생 버튼" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default VolumerPlaylist;
