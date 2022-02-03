import React from "react";
import "./ProfileHeader.scss";
const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <p className="profile-header__user-name">User_Name</p>
      <p className="profile-header__user-id">User_ID</p>
      <button className="profile-header__header-img-upload-btn">
        Upload header image
      </button>
      <button className="profile-header__user-img"></button>
      <button className="profile-header__user-img-upload-btn">
        Upload image
      </button>
    </div>
  );
};

export default ProfileHeader;
