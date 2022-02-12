import React from "react";
import "./ProfileNav.scss";
import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  return (
    <div className="profile-nav flex">
      <ul className="profile-nav-left mont flex">
        <li>
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              "profile-nav-left__btn fs-24 w-600" +
              (isActive ? " btn--active" : "btn--unactive")
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/likes"
            className={({ isActive }) =>
              "profile-nav-left__btn fs-24 w-600" +
              (isActive ? " btn--active" : "btn--unactive")
            }
          >
            Likes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/tracks"
            className={({ isActive }) =>
              "profile-nav-left__btn fs-24 w-600" +
              (isActive ? " btn--active" : "btn--unactive")
            }
          >
            Tracks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/playlists"
            className={({ isActive }) =>
              "profile-nav-left__btn fs-24 w-600" +
              (isActive ? " btn--active" : "btn--unactive")
            }
          >
            Playlists
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/reposts"
            className={({ isActive }) =>
              "profile-nav-left__btn fs-24 w-600" +
              (isActive ? " btn--active" : "btn--unactive")
            }
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
