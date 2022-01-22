import "./RightAside.scss";
import PlayIcoSrc from "@ico/play.png";
import RecentPlayList from "./RecentPlayList";

function RightAside() {
  return (
    <aside className="right-aside">
      <div className="right-aside-title-wrapper flex align-center">
        <p className="noto fs-14 w-400 fc-white">최근 들은 곡</p>
        <img
          className="right-aside-title-wrapper--play-icon"
          src={PlayIcoSrc}
          alt="재생 아이콘 이미지"
        />
      </div>

      {/*  */}
      <RecentPlayList />
    </aside>
  );
}

export default RightAside;
