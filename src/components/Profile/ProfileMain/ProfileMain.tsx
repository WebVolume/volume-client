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
      <div className="profile-main-header mont">
        <a className="profile-main-header__left-btn fs-24 w-600 btn--active">
          All
        </a>
        <a className="profile-main-header__left-btn fs-24 w-600">Likse</a>
        <a className="profile-main-header__left-btn fs-24 w-600">Tracks</a>
        <a className="profile-main-header__left-btn fs-24 w-600">Playlists</a>
        <a className="profile-main-header__left-btn fs-24 w-600">Reposts</a>
        <a className="profile-main-header__right-btn fs-18">Edit</a>
        <a className="profile-main-header__right-btn fs-18">Share</a>
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
