import commentIcon from "@ico/comment.svg";
import { v4 as uuidv4 } from "uuid";
import MusicComment from "./MusicComment";
import "./MusicCommentList.scss";

const MusicCommentList = () => {
  const autoResizeTextarea = () => {
    let textarea = document.getElementById("autoTextarea");
    if (textarea) {
      let fs = document.defaultView
        ?.getComputedStyle(textarea)
        .getPropertyValue("font-size");
      textarea.style.height = "auto";
      let height = textarea.scrollHeight;
      textarea.style.height = `${
        height + parseInt(fs !== undefined ? fs : "0")
      }px`;
    }
  };
  const dummy = [
    {
      id: "user_1245",
      content:
        "아 ㅋㅋㅋㅋ 노래 너무 내 취향이다 너무 좋다,,ㅎㅎㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅎㅎㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅎㅎㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅎㅎㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅎㅎㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
      date: "7"
    },
    {
      id: "user_1245",
      content: "아 ㅋㅋㅋㅋ 노래 너무 내 취향이다 너무 좋다,,ㅎㅎ",
      date: "7"
    },
    {
      id: "user_1245",
      content: "아 ㅋㅋㅋㅋ 노래 너무 내 취향이다 너무 좋다,,ㅎㅎ",
      date: "7",
      reply: [
        {
          id: "Gwen",
          content: "인정 저도 ㅋㅋ",
          date: "7"
        }
      ]
    }
  ];
  return (
    <div className="music-comment-list mont">
      <textarea
        id="autoTextarea"
        className="music-comment-list__input fc-white"
        maxLength={500}
        onKeyDown={autoResizeTextarea}
        onKeyUp={autoResizeTextarea}
      />
      <button className="music-comment-list__add-btn fs-18">등록</button>
      <div className="music-comment-list-header flex align-center">
        <img
          src={commentIcon}
          alt="코멘트아이콘"
          className="music-comment-list-header__comment-img inline-block"
        />
        <p className="music-comment-list-header__title fs-18">3개의 댓글</p>
      </div>
      <ul className="music-comment-list-ul">
        <li className="music-comment-list-li__li">
          {dummy.map(({ id, content, date, reply }) => (
            <MusicComment
              id={id}
              content={content}
              date={date}
              reply={reply}
              key={uuidv4()}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default MusicCommentList;
