import React from "react";
import "./UserStats.scss";
const UserStats = () => {
  return (
    <div className="user-stats">
      <ul className="user-stats-ul">
        <li className="user-stats-ul__li">
          <p className="user-stats-ul__title">Followers</p>
          <p className="user-stats-ul__number">0</p>
        </li>
        <li className="user-stats-ul__li">
          <p className="user-stats-ul__title">Following</p>
          <p className="user-stats-ul__number">0</p>
        </li>
        <li className="user-stats-ul__li">
          <p className="user-stats-ul__title">Tracks</p>
          <p className="user-stats-ul__number">0</p>
        </li>
      </ul>
    </div>
  );
};

export default UserStats;
