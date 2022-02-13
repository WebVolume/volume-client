import RecentPlayListItem from "./RecentPlayListItem";
import "./RecentPlayList.scss";
import { v4 as uuidv4 } from "uuid";

function RecentPlayList() {
  return (
    <ul className="recent-play-list">
      {[1, 2, 3, 4, 5].map(item => (
        <RecentPlayListItem key={uuidv4()} />
      ))}
    </ul>
  );
}

export default RecentPlayList;
