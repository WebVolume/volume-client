import "./Home.scss";
import logoImg from "../../assets/images/volume.png";
import hamburgerIcon from "@ico/hamburger.svg";
import rightArrowIcon from "@ico/rightArrow.svg";
import { useEffect, useState } from "react";
import {
  SignInModal,
  SignUpModal,
  SocialSignUpModal
} from "@components/SignModal";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/index";
import { getUserStateFromLocal } from "@store/ducks/auth/authSlice";

function Home() {
  const [signInModalVisible, setsingInModalVisible] = useState(false);
  const [signUpModalVisible, setsingUpModalVisible] = useState(false);
  const [socialSignUpVisible, setSocialSignUpVisible] = useState(false);
  const [asideTapVisible, setAsideTapVisible] = useState(false);
  const handleSignInModalVisible = () => {
    setsingInModalVisible(!signInModalVisible);
    setAsideTapVisible(false);
  };
  const handleSignUpModalVisible = () => {
    setsingUpModalVisible(!signUpModalVisible);
    setAsideTapVisible(false);
  };
  const handleSocialSignUpVisible = () => {
    setSocialSignUpVisible(!socialSignUpVisible);
    setAsideTapVisible(false);
  };
  const handleAsideTapVisible = () => {
    setAsideTapVisible(!asideTapVisible);
  };

  const { kakaoEmail, userInfo } = useSelector(({ auth }: RootState) => ({
    kakaoEmail: auth.kakaoEmail,
    userInfo: auth.userInfo
  }));

  useEffect(() => {
    if (kakaoEmail) setSocialSignUpVisible(true);
  }, [kakaoEmail]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) navigate("./main");
  }, [userInfo]);

  useEffect(() => {
    dispatch(getUserStateFromLocal());
  }, []);

  return !userInfo ? (
    <div className="home-wrapper fc-white mont-alt">
      {signInModalVisible && (
        <SignInModal handleSignInModalVisible={handleSignInModalVisible} />
      )}
      {signUpModalVisible && (
        <SignUpModal handleSignUpModalVisible={handleSignUpModalVisible} />
      )}
      {socialSignUpVisible && (
        <SocialSignUpModal
          handleSocialSignUpVisible={handleSocialSignUpVisible}
        />
      )}
      <header className="header-container flex align-center">
        <p className="header-container__logo-title fs-36">Volume</p>
        <button className="header-container__hamburger-btn phone">
          <img
            src={hamburgerIcon}
            className="header-container__hamburger-icon"
            alt="햄버거아이콘"
            onClick={handleAsideTapVisible}
          />
        </button>
        <div
          className={
            "home-sign-container flex " +
            (asideTapVisible
              ? "home-aside-tap--visible"
              : "home-aside-tap--hidden")
          }
        >
          <button
            className="home-sign-container__tap-btn phone"
            onClick={handleAsideTapVisible}
          >
            <img
              src={rightArrowIcon}
              className="home-sign-container__arrow-icon"
              alt="탭 숨기기 버튼"
            />
          </button>
          <button
            className="home-sign-container__signup-btn fs-24"
            onClick={handleSignUpModalVisible}
          >
            Sign up
          </button>
          <button
            className="home-sign-container__signin-btn fs-24"
            onClick={handleSignInModalVisible}
          >
            Login
          </button>
        </div>
      </header>
      <main className="main-container">
        <p className="main-container__logo-title fs-125">Volume</p>
        <img
          className="main-container__logo-img"
          src={logoImg}
          alt="로고이미지"
        />
        <button
          className="main-container__signup-btn w-600 fs-35"
          onClick={handleSignUpModalVisible}
        >
          <p>Sign Up</p>
        </button>
      </main>
    </div>
  ) : (
    <Navigate to="main" />
  );
}

export default Home;
