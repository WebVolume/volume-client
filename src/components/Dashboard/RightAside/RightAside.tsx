import "./RightAside.scss";
import PlayIcoSrc from "@ico/play.png";
import RecentPlayList from "./RecentPlayList";

function RightAside() {
  return (
    <>
      <aside className="right-aside desktop">
        <div className="right-aside-title-wrapper flex align-center">
          <img
            className="right-aside-title-wrapper--play-icon"
            src={PlayIcoSrc}
            alt="재생 아이콘 이미지"
          />
          <p className="noto fs-14 w-400 fc-white">최근 들은 곡</p>
        </div>

        {/*  */}
        <RecentPlayList />
      </aside>
      <div className="empty-aside desktop"></div>
    </>
  );
}

export default RightAside;
