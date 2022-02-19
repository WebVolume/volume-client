import React from "react";
import "./RecommendationPlaylist.scss";
import DummyPlayListImg from "@images/dummys/dummy-playlist.png";
import { v4 as uuidv4 } from "uuid";

function RecommendationPlaylist() {
  return (
    <div className="recommendation-playlist">
      <p className="recommendation-playlist--title w-500 fs-18 noto">
        추천 플레이리스트
      </p>

      <ul className="playlist-list flex">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <li key={uuidv4()} className="playlist-list--item">
            <a href="#">
              <img
                className="playlist-list--item-cover"
                src={DummyPlayListImg}
                alt="플레이리스트 커버사진"
              />
              <p className="playlist-list--item-title ellipsis fs-16 noto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde itaque error quo dicta reiciendis doloremque corrupti minus
                earum. Rem, vel aliquid animi quo ipsam laudantium nihil placeat
                id! Labore!
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationPlaylist;
