import React from "react";
import "./ProfileNav.scss";
import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  const activeTabClassName = (active: boolean) => {
    const prefix = "profile-nav-left__btn fs-24 w-600 btn--";

    return active ? prefix + "active" : prefix + "unactive";
  };
  return (
    <div className="profile-nav flex">
      <ul className="profile-nav-left mont flex">
        <li>
          <NavLink
            to="/main/profile"
            end
            className={({ isActive }) => activeTabClassName(isActive)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/main/profile/likes"
            className={({ isActive }) => activeTabClassName(isActive)}
          >
            Likes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/main/profile/tracks"
            className={({ isActive }) => activeTabClassName(isActive)}
          >
            Tracks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/main/profile/playlists"
            className={({ isActive }) => activeTabClassName(isActive)}
          >
            Playlists
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/main/profile/reposts"
            className={({ isActive }) => activeTabClassName(isActive)}
          >
            Reposts
          </NavLink>
        </li>
      </ul>
      <ul className="profile-nav-right mont flex">
        <li>
          <a href="#" className="profile-nav-right__btn fs-18">
            Share
          </a>
        </li>
        <li>
          <a href="#" className="profile-nav-right__btn fs-18">
            Edit
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileNav;
