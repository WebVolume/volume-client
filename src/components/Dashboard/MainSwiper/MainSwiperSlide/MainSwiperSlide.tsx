import "./MainSwiperSlide.scss";
import PlayButtonSrc from "@images/play-button.png";

function MainSwiperSlide() {
  return (
    <div className="main-swiper-slide">
      <img
        className="album-art"
        src="https://user-images.githubusercontent.com/57122180/150649419-798d4877-69f3-4000-864c-3c171f1e79ff.png"
        alt="앨범 아트"
      />
      <div className="music-info-container flex column align-center justify-end">
        <a className="play-button-wrapper" href="#">
          <img className="play-button" src={PlayButtonSrc} alt="재생 버튼" />
        </a>
        <p className="title-info mont fc-white">Shape of you</p>
        <p className="singer-info mont fc-white">ed Sheeran</p>
      </div>
    </div>
  );
}

export default MainSwiperSlide;
