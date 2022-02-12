import React from "react";
import "./ProfileHeader.scss";
import imgIcon from "@ico/img.svg";

const ProfileHeader = () => {
  return (
    <div className="profile-header fc-white mont">
      <p className="profile-header__user-name fs-24 w-600 flex align-center justify-center relative">
        User_Name
      </p>
      <p className="profile-header__user-id fs-20 flex align-center justify-center relative">
        User_ID
      </p>
      <button className="profile-header__header-img-upload-btn  align-center justify-center block flex relative">
        <img
          src={imgIcon}
          alt="이미지업로드아이콘"
          className="profile-header__img-icon"
        />
        <p className="fs-14 fc-white mont">Upload header image</p>
      </button>
      <div className="profile-header__user-img relative"></div>
      <button className="profile-header__user-img-upload-btn flex align-center justify-center relative">
        <img
          src={imgIcon}
          alt="이미지업로드아이콘"
          className="profile-header__img-icon"
        />
        <p className="fs-14 fc-white mont">Upload image</p>
      </button>
    </div>
  );
};

export default ProfileHeader;
