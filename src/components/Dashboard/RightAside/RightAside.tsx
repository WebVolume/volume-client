import "./RightAside.scss";
import PlayIcoSrc from "@ico/play.png";
import RecentPlayList from "./RecentPlayList";
import VolumeSvg from "@svgs/right-aside-volume.svg";

function RightAside() {
  return (
    <>
      <aside className="right-aside desktop flex column justify-space-between">
        <div className="right-aside-container--top">
          {/*  */}
          <div className="right-aside-title-wrapper flex align-center justify-space-between">
            <div className="title-wrapper-left flex align-center">
              <img
                className="right-aside-title-wrapper--play-icon"
                src={PlayIcoSrc}
                alt="재생 아이콘 이미지"
              />
              <span className="noto fs-14 w-400 fc-white">최근 들은 곡</span>
            </div>

            <a href="#" className="view-all noto fs-14 w-400">
              모두 보기
            </a>
          </div>

          {/*  */}
          <RecentPlayList />
        </div>
        <div className="right-aside-container--bottom flex align-center justify-end">
          <img className="volume-logo" src={VolumeSvg} alt="볼륨 로고" />
          <span className="volume-title inline-block fs-20">Volume</span>
        </div>
      </aside>
      <div className="empty-aside desktop"></div>
    </>
  );
}

export default RightAside;
