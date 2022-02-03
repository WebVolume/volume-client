import React from "react";
import { UserStats } from "@components/Profile";
import { RelateTrackList, InPlayList } from "@components/Common";

import "./ProfileMain.scss";

const ProfileMain = () => {
  return (
    <div className="profile-main">
      <div className="profile-main-header">
        <button className="profile-main-header__left-btn">All</button>
        <button className="profile-main-header__left-btn">Likse</button>
        <button className="profile-main-header__left-btn">Tracks</button>
        <button className="profile-main-header__left-btn">Playlists</button>
        <button className="profile-main-header__left-btn">Reposts</button>
        <button className="profile-main-header__right-btn">Edit</button>
        <button className="profile-main-header__right-btn">Share</button>
      </div>
      <div className="profile-main-grid-container">
        <div className="profile-main-grid-container__music-list">
          여기에 뮤직리스트
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
