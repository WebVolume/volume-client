import "./MusicAbout.scss";
import MusicCommentList from "./MusicCommentList";
import MusicDescription from "./MusicDescription";
import UserAbout from "./UserAbout";

const MusicAbout = () => {
  return (
    <div className="music-about-container flex mont">
      <div className="music-about-container__left">
        <UserAbout />
      </div>
      <div className="music-about-container__right">
        <MusicDescription />
        <MusicCommentList />
      </div>
    </div>
  );
};

export default MusicAbout;
