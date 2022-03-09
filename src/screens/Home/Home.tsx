import "./Home.scss";
import logoImg from "../../assets/images/volume.png";
import hamburgerIcon from "@ico/hamburger.svg";
import rightArrowIcon from "@ico/rightArrow.svg";
import { useState } from "react";
import { SignInModal, SignUpModal } from "@components/SignModal";
import { Navigate } from "react-router-dom";

function Home() {
  const isAuth = localStorage.getItem("isLoggedIn");
  const [signInModalVisible, setsingInModalVisible] = useState(false);
  const [signUpModalVisible, setsingUpModalVisible] = useState(false);
  const [asideTapVisible, setAsideTapVisible] = useState(false);
  const handleSignInModalVisible = () => {
    setsingInModalVisible(!signInModalVisible);
    setAsideTapVisible(false);
  };
  const handleSignUpModalVisible = () => {
    setsingUpModalVisible(!signUpModalVisible);
    setAsideTapVisible(false);
  };
  const handleAsideTapVisible = () => {
    setAsideTapVisible(!asideTapVisible);
  };
  return !isAuth ? (
    <div className="home-wrapper fc-white mont-alt">
      {signInModalVisible && (
        <SignInModal handleSignInModalVisible={handleSignInModalVisible} />
      )}
      {signUpModalVisible && (
        <SignUpModal handleSignUpModalVisible={handleSignUpModalVisible} />
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
            onClick={handleSignInModalVisible}
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
