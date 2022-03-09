import React from "react";
import testImg from "@images/background.png";
import "./MusicComment.scss";

const MusicComment = ({ id, content, date, reply }: any) => {
  return (
    <div className="music-comment flex">
      <img src={testImg} alt="" className="music-comment__img" />
      <div className="music-comment-main">
        <p className="music-comment-main__id fs-14">{id}</p>
        <p className="music-comment-main__content fs-16">{content}</p>
      </div>
      <p className="music-comment__date fs-14">{date}일전</p>
    </div>
  );
};

export default MusicComment;
