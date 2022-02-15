import "./Home.scss";
import logoImg from "../../assets/images/volume.png";
import hamburgerIcon from "@ico/hamburger.svg";
import { useState } from "react";
import {
  SignInModal,
  SignUpModal,
  SocialSignUpModal
} from "@components/SignModal";

function Home() {
  const [signInModalVisible, setsingInModalVisible] = useState(false);
  const [signUpModalVisible, setsingUpModalVisible] = useState(false);
  const handleSignInModalVisible = () => {
    setsingInModalVisible(!signInModalVisible);
  };
  const handleSignUpModalVisible = () => {
    setsingUpModalVisible(!signUpModalVisible);
  };
  return (
    <div className="home-wrapper fc-white mont-alt">
      {signInModalVisible && (
        <SignInModal handleSignInModalVisible={handleSignInModalVisible} />
      )}
      {signUpModalVisible && (
        <SocialSignUpModal
          handleSignUpModalVisible={handleSignUpModalVisible}
        />
      )}
      <header className="header-container flex align-center">
        <p className="header-container__logo-title fs-36">Volume</p>
        <button className="header-container__hamburger-btn phone">
          <img
            src={hamburgerIcon}
            className="header-container__hamburger-icon"
            alt="햄버거아이콘"
          />
        </button>
        <button
          className="header-container__signup-btn fs-24 "
          onClick={handleSignUpModalVisible}
        >
          Sign up
        </button>
        <button
          className="header-container__signin-btn fs-24"
          onClick={handleSignInModalVisible}
        >
          Login
        </button>
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
  );
}

export default Home;
