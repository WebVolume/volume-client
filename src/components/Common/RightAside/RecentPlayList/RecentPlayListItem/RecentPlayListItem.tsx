import { useCallback } from "react";
import "./RecentPlayListItem.scss";

function RecentPlayListItem() {
  const playMusicHandler = useCallback(() => {
    console.log("object");
  }, []);

  return (
    <a
      href="#"
      onClick={event => {
        event.preventDefault();
        playMusicHandler();
      }}
      className="recent-play-list-item flex align-center"
    >
      <img
        className="album-img"
        src="http://placehold.it/49x49.png"
        alt="플레이 리스트 앨범 아트"
      />

      <span className="mont w-500 fs-14 fc-white">Ashes</span>
    </a>
  );
}

export default RecentPlayListItem;
