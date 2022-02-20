import React from "react";
import { UserStats } from "@components/Profile";
import { RelateTrackList, InPlayList } from "@components/Common";

import "./ProfileMain.scss";
import { Outlet } from "react-router-dom";
import ProfileNav from "./ProfileNav";

const ProfileMain = () => {
  return (
    <div className="profile-main fc-white">
      <ProfileNav />
      <div className="profile-main__music-list">
        <Outlet />
      </div>
      <UserStats />
      <div className="profile-main__right-container">
        <RelateTrackList />
        <InPlayList />
      </div>
    </div>
  );
};

export default ProfileMain;
