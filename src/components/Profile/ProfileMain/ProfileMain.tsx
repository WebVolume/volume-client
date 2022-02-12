import React from "react";
import { UserStats } from "@components/Profile";
import {
  RelateTrackList,
  InPlayList,
  InlineTrackList,
  InlinePlayLists
} from "@components/Common";

import "./ProfileMain.scss";

const ProfileMain = () => {
  return (
    <div className="profile-main fc-white">
      <div className="profile-main-header flex">
        <ul className="profile-main-left-header mont flex">
          <li>
            <a
              href="#"
              className="profile-main-left-header__btn fs-24 w-600 btn--active"
            >
              All
            </a>
          </li>
          <li>
            <a href="#" className="profile-main-left-header__btn fs-24 w-600">
              Likes
            </a>
          </li>
          <li>
            <a href="#" className="profile-main-left-header__btn fs-24 w-600">
              Tracks
            </a>
          </li>
          <li>
            <a href="#" className="profile-main-left-header__btn fs-24 w-600">
              Playlists
            </a>
          </li>
          <li>
            <a href="#" className="profile-main-left-header__btn fs-24 w-600">
              Reposts
            </a>
          </li>
        </ul>
        <ul className="profile-main-right-header mont flex">
          <li>
            <a href="#" className="profile-main-right-header__btn fs-18">
              Share
            </a>
          </li>
          <li>
            <a href="#" className="profile-main-right-header__btn fs-18">
              Edit
            </a>
          </li>
        </ul>
      </div>

      <div className="profile-main-grid-container">
        <div className="profile-main-grid-container__music-list">
          <InlineTrackList />
          <InlinePlayLists />
        </div>
        <UserStats />
        <div className="profile-main-grid-container__right-container">
          <RelateTrackList />
          <InPlayList />
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
