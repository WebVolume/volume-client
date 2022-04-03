import React from "react";
import "./CircleList.scss";
import { PlayList as testColor } from "@constants/Colors";
import { v4 as uuidv4 } from "uuid";
import dummyImg1 from "@images/dummys/dummy-album-art-big.png";
import dummyImg2 from "@images/dummys/dummy-album-art.png";
import dummyImg3 from "@images/dummys/dummy-playlist.png";
import dummyImg4 from "@images/dummys/dummy-profile.jpeg";
import { Link } from "react-router-dom";
const CircleList = ({ title }: any) => {
  let dummys = [
    { id: 1, img: dummyImg1 },
    { id: 2, img: dummyImg2 },
    { id: 3, img: dummyImg3 },
    { id: 4, img: dummyImg4 },
    { id: 1, img: dummyImg1 },
    { id: 2, img: dummyImg2 },
    { id: 3, img: dummyImg3 },
    { id: 4, img: dummyImg4 },
    { id: 1, img: dummyImg1 },
    { id: 2, img: dummyImg2 },
    { id: 3, img: dummyImg3 },
    { id: 4, img: dummyImg4 },
    { id: 1, img: dummyImg1 },
    { id: 2, img: dummyImg2 },
    { id: 3, img: dummyImg3 },
    { id: 4, img: dummyImg4 }
  ].splice(0, 13);
  //최대 13개

  return (
    <div className="circle-list flex column">
      <div className="circle-list-header flex justify-space-between">
        <div className="circle-list-header__title inline-block fs-18">
          {`300 ${title}`}
        </div>
        <button className="circle-list-header__more-btn fs-14">더보기</button>
      </div>
      <ul className="circle-list-ul">
        {dummys.map((dummy, index) => (
          // index 부분 차후 유저 id나 특정값으로 변경
          <Link
            to={`/main/profile/${dummy.id}`}
            title={`${dummy.id} 유저로 이동`}
          >
            <img
              src={dummy.img}
              className={`circle-list-ul__li${index}`}
              key={uuidv4()}
              alt="유저 프로필 이미지"
            ></img>
          </Link>
        ))}
      </ul>
      <div className="circle-list__empty"></div>
    </div>
  );
};

export default CircleList;
