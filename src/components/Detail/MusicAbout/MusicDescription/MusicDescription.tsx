import "./MusicDescription.scss";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const MusicDescription = () => {
  return (
    <div className="music-des-container">
      <pre className="music-des-container__description">
        {`스텔라를 보여준 매력적인 노래입니다. 
        쿵쿵하는 음악을 듣고 싶은 모두에게 추천 합니다.`}
      </pre>
      <ul className="music-des-categorys flex">
        {["매력", "POP"].map(catogory => (
          <Link
            to=""
            className="music-des-categorys__item fs-14 ellipsis"
            key={uuidv4()}
            title={`${catogory} 태그로 검색하기`}
          >
            {catogory}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MusicDescription;
