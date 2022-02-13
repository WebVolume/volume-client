import React from "react";
import "./Profile.scss";
import * as Common from "@components/Common";
import { ProfileHeader, ProfileMain } from "@components/Profile";

const Profile = () => {
  return (
    <div className="profile-screen">
      <ProfileHeader />
      <ProfileMain />
    </div>
  );
};

export default Profile;
