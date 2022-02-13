import React from "react";
import "./Profile.scss";
import * as Common from "@components/Common";
import { ProfileHeader, ProfileMain } from "@components/Profile";

const Profile = () => {
  return (
    <div className="profile-screen">
      <Common.TopNav />
      <div className="profile-container">
        <ProfileHeader />
        <ProfileMain />
      </div>
    </div>
  );
};

export default Profile;
