import followerIcon from "@ico/mypage.svg";
import trackIcon from "@ico/track.svg";
import testImg from "@images/background.png";
import { Link } from "react-router-dom";
import getCounts from "@utils/getCounts";
import "./UserAbout.scss";

const UserAbout = () => {
  return (
    <div className="user-about-container flex align-center">
      {/* 차후 ~~ 유저페이지로 이동 */}
      <Link to="" title="유저페이지로 이동">
        <img
          className="user-about-container__user-img"
          src={testImg}
          alt="유저이미지"
        />
      </Link>
      <div className="user-about-detail">
        <p className="user-about-container__user-name fs-18 ellipsis ">Gwen</p>
        <ul className="user-about-icon-list flex">
          <li className="user-about-icon-list__item flex align-center">
            <img
              className="user-about-icon-list__follower-img"
              src={followerIcon}
              alt="user-follower-count-icon"
            />
            <div className="user-about-icon-list__follower fs-15 ellipsis">
              {getCounts(10000)}
            </div>
          </li>
          <li className="user-about-icon-list__item flex align-center">
            <img
              className="user-about-icon-list__tracks-img"
              src={trackIcon}
              alt="user-track-count-icon"
            />
            <div className="user-about-icon-list__tracks ellipsis">
              {getCounts(9999)}
            </div>
          </li>
        </ul>
        <button className="user-about-container__follow-btn flex justify-center align-center fs-14">
          팔로우 취소
        </button>
      </div>
    </div>
  );
};

export default UserAbout;
