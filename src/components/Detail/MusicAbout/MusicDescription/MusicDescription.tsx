import React from "react";
import "./MusicDescription.scss";

const MusicDescription = () => {
  return (
    <div className="music-des-container">
      <pre className="music-des-container__description fs-18">
        {`스텔라를 보여준 매력적인 노래입니다. 
        쿵쿵하는 음악을 듣고 싶은 모두에게 추천 합니다.`}
      </pre>
      <ul className="music-des-categorys flex">
        {["매력", "POP"].map(catogory => (
          <li className="music-des-categorys__item fs-14 ellipsis">
            {catogory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicDescription;
