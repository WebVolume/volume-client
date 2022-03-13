import React from "react";
import "./UserAbout.scss";
import testImg from "../../../../assets/images/background.png";
import followerIcon from "@ico/mypage.svg";
import trackIcon from "@ico/track.svg";

const UserAbout = () => {
  return (
    <div className="user-about-container flex column align-center">
      <img
        className="user-about-container__user-img"
        src={testImg}
        alt="유저이미지"
      />
      <p className="user-about-container__user-name fs-18 ellipsis ">Gwen</p>
      <div className="user-about-detail">
        <ul className="user-about-icon-list flex">
          <li className="user-about-icon-list__item flex align-center">
            <img
              className="user-about-icon-list__follower-img"
              src={followerIcon}
              alt=""
            />
            <div className="user-about-icon-list__follower fs-15 ellipsis">
              100000
            </div>
          </li>
          <li className="user-about-icon-list__item flex align-center">
            <img
              className="user-about-icon-list__tracks-img"
              src={trackIcon}
              alt=""
            />
            <div className="user-about-icon-list__tracks fs-15 ellipsis">
              10000
            </div>
          </li>
        </ul>
        <div className="user-about-container__follow-btn flex justify-center align-center fs-14">
          팔로우 취소
        </div>
      </div>
    </div>
  );
};

export default UserAbout;
