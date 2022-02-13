import "./RecommendationList.scss";
import RecommendationListItem from "./RecommendationListItem";
import { v4 as uuidv4 } from "uuid";

function RecommendationList() {
  return (
    <div className="recommendation-list">
      <p className="recommendation-list--title fs-18 noto w-500">
        여러분을 위한 volume의 추천
      </p>

      <ul className="list-conatiner flex">
        <li className="tablet-start-padding hidden"></li>
        {[1.2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <li key={uuidv4()} className={"list-item first"}>
            <RecommendationListItem />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
