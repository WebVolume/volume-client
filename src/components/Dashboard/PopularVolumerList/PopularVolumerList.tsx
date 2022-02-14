import "./PopularVolumerList.scss";
import PopularVolumerListItem from "./PopularVolumerListItem";
import { v4 as uuidv4 } from "uuid";

function PopularVolumerList() {
  return (
    <div className="popular-volumer-list">
      <p className="popular-volumer-list--title noto w-500 fs-18">
        인기 상승 volumer
      </p>

      <ul className="volumer-list flex">
        <li className="tablet-start-padding hidden"></li>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <li key={uuidv4()} className="volumer-list-item">
            <PopularVolumerListItem />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularVolumerList;
