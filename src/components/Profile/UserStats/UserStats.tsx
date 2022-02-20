import React from "react";
import "./UserStats.scss";
const UserStats = () => {
  return (
    <div className="user-stats flex justify-center align-center fc-white mont">
      <ul className="user-stats-ul flex">
        <li className="user-stats-ul__li">
          <p className="user-stats-ul__title fs-18 flex justify-center">
            Followers
          </p>
          <p className="user-stats-ul__number fs-24 flex justify-center">0</p>
        </li>
        <li className="user-stats-ul__li">
          <p className="user-stats-ul__title fs-18 flex justify-center">
            Following
          </p>
          <p className="user-stats-ul__number fs-24 flex justify-center">0</p>
        </li>
        <li className="user-stats-ul__li">
          <p className="user-stats-ul__title fs-18 flex justify-center">
            Tracks
          </p>
          <p className="user-stats-ul__number fs-24 flex justify-center">0</p>
        </li>
      </ul>
    </div>
  );
};

export default UserStats;
