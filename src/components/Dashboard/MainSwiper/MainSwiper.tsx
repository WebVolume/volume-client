// Import Swiper styles
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import "./MainSwiper.scss";
import MainSwiperSlide from "./MainSwiperSlide";
import NavLeftIcoSrc from "@ico/nav-left.png";
import NavRightIcoSrc from "@ico/nav-right.png";

function MainSwiper() {
  return (
    <div className="main-swiper flex justify-center">
      <div className="swiper-container">
        {/*  */}
        <div className="custom-navigation prev flex align-center">
          <a className="prev" href="#">
            <img
              className="custom-navigation--image"
              src={NavLeftIcoSrc}
              alt="왼쪽 화살표 이미지"
            />
          </a>
        </div>

        {/*  */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next"
          }}
        >
          {[1, 2, 3, 4].map(() => (
            <SwiperSlide key={uuidv4()}>
              <MainSwiperSlide />
            </SwiperSlide>
          ))}
        </Swiper>

        {/*  */}
        <div className="custom-navigation next flex align-center">
          <a className="next" href="#">
            <img
              className="custom-navigation--image"
              src={NavRightIcoSrc}
              alt="왼쪽 화살표 이미지"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainSwiper;
