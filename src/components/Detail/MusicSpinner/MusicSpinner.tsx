import "./MusicSpinner.scss";
import testImg from "@images/background.png";
import playBtnImg from "@ico/play-fill-black.svg";

const MusicSpinner = () => {
  return (
    <div className="music-spinner flex justify-center align-center">
      <img src={testImg} alt="albumImg" className="music-spinner__album-img" />
      <button
        className="music-spinner__play-btn flex justify-center align-center"
        title="음악 재생하기"
      >
        <img
          src={playBtnImg}
          alt="음악 재생 버튼 이미지"
          className="music-spinner__play-btn-img"
        />
      </button>
    </div>
  );
};

export default MusicSpinner;
