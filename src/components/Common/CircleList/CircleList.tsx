import React from "react";
import "./CircleList.scss";
import { PlayList as testColor } from "@constants/Colors";
import { v4 as uuidv4 } from "uuid";

const CircleList = ({ title }: any) => {
  let dummy = testColor.concat(testColor).concat(testColor);
  return (
    <div className="circle-list flex column">
      <div className="circle-list-header flex justify-space-between">
        <div className="circle-list-header__title inline-block fs-18">
          {`300 ${title}`}
        </div>
        <button className="circle-list-header__more-btn fs-14">더보기</button>
      </div>
      <ul className="circle-list-ul">
        {dummy.map((color, index) => (
          <li
            style={{ background: color }}
            className={`circle-list-ul__li${index}`}
            key={uuidv4()}
          ></li>
        ))}
      </ul>
      <div className="circle-list__empty"></div>
    </div>
  );
};

export default CircleList;
