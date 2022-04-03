import testImg from "@images/background.png";
import "./MusicComment.scss";

const MusicComment = ({ id, content, date, reply }: any) => {
  return (
    <div className="music-comment flex">
      <a href="" title="해당 유저로 이동">
        <img
          src={testImg}
          alt="유저 프로필 이미지"
          className="music-comment__img"
        />
      </a>

      <div className="music-comment-main">
        <p className="music-comment-main__id fs-14">{id}</p>
        <p className="music-comment-main__content fs-16">{content}</p>
      </div>
      <p className="music-comment__date fs-14">{date}일전</p>
    </div>
  );
};

export default MusicComment;
