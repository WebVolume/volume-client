import { InPlayList, RelateTrackList } from "@components/Common";
import { MusicAbout, MusicInfo, MusicSpinner } from "@components/Detail";
import "./Detail.scss";

const Detail = () => {
  return (
    <div className="detail-screen">
      <div className="detail-top-container flex">
        <MusicSpinner />
        <MusicInfo />
      </div>
      <div className="detail-bottom-container flex fc-white">
        <MusicAbout />
        <div className="detail-bottom-right-container">
          <RelateTrackList />
          <InPlayList />
        </div>
      </div>
    </div>
  );
};

export default Detail;
