import React from "react";
import "./CircleList.scss";
import { PlayList as testColor } from "@constants/Colors";
const CircleList = ({ title }: any) => {
  let dummy = testColor.concat(testColor).concat(testColor);
  console.log(dummy);
  console.log(title);
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
            className={`circle-list-ul__li${index} inline-block`}
          ></li>
        ))}
      </ul>
      <div className="circle-list__empty"></div>
    </div>
  );
};

export default CircleList;
